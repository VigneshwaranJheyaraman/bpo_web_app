import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return (
      <input
        type={this.props.type ? this.props.type : "text"}
        value={this.props.value}
        onChange={e => {
          this.props.updateValue(e.target.value, this.props.inputIndex);
        }}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default Input;
