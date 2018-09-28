import React from "react";
import { Input } from "@material-ui/core";

class InputWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <Input fullWidth value={this.props.value} />
      </div>
    );
  }
}

export default InputWrapper;
