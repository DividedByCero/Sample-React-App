import React from "react";
import ReactDOM from "react-dom";
import InputWrapper from "../commons/inputWrapper";
import {
  Toolbar,
  Typography,
  Grid,
  withStyles,
  Button,
  Paper,
  Container,
  Divider
} from "@material-ui/core";

const inputWrapperStyle = {
  padding: 150
};

class CRUDItem extends React.Component {
  constructor(props) {
    super(props);
    this.item = props.pick;
    this.delete = props.delete;
  }
  render() {
    return (
      <Grid item lg={3} sm={12} xs={12}>
        <Paper className={inputWrapperStyle}>
          <Button
            variant="outlined"
            onClick={this.delete(this.item)}
            style={{ float: "right", margin: 10 }}
          >
            Delete
          </Button>
          <div style={{ padding: 50 }}>
            <Typography align="caption">Field 1</Typography>
            <InputWrapper value={this.item.field} />
          </div>
        </Paper>
      </Grid>
    );
  }
}

export default CRUDItem;
