import React, { Component } from "react";
import { ProgressBar, ProgressPercentage } from "./Progress.style.js";

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ProgressBar>
        <ProgressPercentage style={{ width: this.props.progress + "%" }} />
      </ProgressBar>
    );
  }
}

export default Progress;
