import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import HeaderBar from "./appbar/headerBar";
import InputWrapper from "./commons/inputWrapper";
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

const stuff = {
  padding : 150
}

function App(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <HeaderBar />
      <div className="App">
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Typography variant="title">[Sample]</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item lg={3} sm={12} xs={12}>
            <Paper>
              <div style={{ padding: 50}}>
                <Typography variant="caption" align="left">Field 1</Typography>
                <InputWrapper className={stuff} />
              </div>
            </Paper>
          </Grid>
          <Grid item lg={3} sm={12} xs={12}>
            <Paper className={stuff}>
              <div style={{ padding: 50 }}>
                <Typography align="caption">Field 1</Typography>
                <InputWrapper />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
var AppWrapper = App;
ReactDOM.render(<AppWrapper />, rootElement);
