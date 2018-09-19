import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <AppBar>
        <Toolbar className="navbar-component">
          <Typography variant="title" style={{ color: "white" }}>
            Master-Detail
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default HeaderBar;
