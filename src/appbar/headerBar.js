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
          <Typography variant="title" className="navbar-title-color">
            Master-Detail
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default HeaderBar;
