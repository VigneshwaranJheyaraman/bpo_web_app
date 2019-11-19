import React, { Component } from "react";
import "./UserInformationItem.css";
import Input from "../Input/Input";

class UserInformationItem extends Component {

  render() {
    return (
      <div className="user-info-item">
        <p className="user-info-item-title">{this.props.infoTitle}</p>
        <Input
          type={this.props.type ? this.props.type : "text"}
          placeholder={this.props.infoPlaceHolder}
          value={this.props.infoValue}
          inputIndex={this.props.index}
          updateValue={this.props.updateInputState}
        />
      </div>
    );
  }
}

export default UserInformationItem;
