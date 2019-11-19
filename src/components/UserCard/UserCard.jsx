import React, { Component } from "react";
import "./UserCard.css";
import UserTag from "../UserTag/UserTag";

class UserCard extends Component {
  userDetailsRenderer = () => {
    var userTags = [];
    for (var tag in this.props.userTags) {
      userTags.push(
        <UserTag
          tagTitle={tag}
          tagData={this.props.userTags[tag]}
          key={userTags.length}
        />
      );
    }
    return userTags;
  };

  render() {
    return (
      <div className="card user-card">
        <img src={this.props.userImgSrc} alt={this.props.userName} />
        <div className="user-tags-scroll">{this.userDetailsRenderer()}</div>
      </div>
    );
  }
}

export default UserCard;
