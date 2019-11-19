import React, { Component } from "react";
import "./UserInformationCard.css";
import UserInformationItem from "../UserInformationItem/UserInformationItem";

class UserInformationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValueStates: []
    };
  }

  updateInputState = (value, index) => {
    var previousInputValues = this.state.inputValueStates;
    previousInputValues[index] = value;
    this.setState({
      inputValueStates: previousInputValues
    });
  };

  userInfoRender = () => {
    var userInfo = [];
    for (var i = 0; i < 10; i++) {
      userInfo.push(
        <UserInformationItem
          infoTitle={`Title ${i}`}
          infoPlaceHolder={`Placeholder ${i}`}
          infoValue={
            this.state.inputValueStates[i] ? this.state.inputValueStates[i] : ""
          }
          key={i}
          index={i}
          updateInputState={this.updateInputState}
        />
      );
    }
    return userInfo;
  };

  render() {
    return (
      <div className="user-head">
        <div className="user-info">{this.userInfoRender()}</div>
        <img src={this.props.userImg} alt="User" />
      </div>
    );
  }
}

export default UserInformationCard;
