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
  Button
} from "@material-ui/core";

const styles = {
  root: {
    paddingTop: 30,
    textAlign: "right"
  },
  gridChild: {
    paddingTop: 30
  }
};

function App(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <HeaderBar />
      <div className="App">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="title">[Template]</Typography>
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <InputWrapper />
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <InputWrapper />
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <Button variant="outlined">Save</Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
var AppWrapper = withStyles(styles)(App);
ReactDOM.render(<AppWrapper />, rootElement);
