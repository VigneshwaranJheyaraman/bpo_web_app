import React, { Component } from "react";
import "./UserTag.css";

class UserTag extends Component {
  render() {
    return (
      <div
        className="user-tag"
        style={this.props.style ? this.props.style : {}}
      >
        <p className="tag-title">{this.props.tagTitle}</p>
        <span>
          <b>:</b>
        </span>
        <p className="tag-data">
          {this.props.tagData ? this.props.tagData : "Not Available"}
        </p>
      </div>
    );
  }
}

export default UserTag;
