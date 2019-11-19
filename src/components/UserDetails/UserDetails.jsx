import React, { Component } from "react";
import "./UserDetails.css";
import UserInformationCard from "../UserInformationCard/UserInformationCard";

class UserDetails extends Component {
  render() {
    return (
      <div className="page user-details">
        <UserInformationCard
          userImg="https://randomuser.me/api/portraits/men/75.jpg"
        />
        <div className="user-db" />
      </div>
    );
  }
}
export default UserDetails;
