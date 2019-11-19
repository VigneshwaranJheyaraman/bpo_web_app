import React, { Component } from "react";
import "./UserAdminPage.css";
import UserDetails from "../UserDetails/UserDetails";
import { withNavigationBarComponent } from "../../NavigationBarHOC";

class UserAdminPage extends Component {
  render() {
    return (
      <div className="page">
        <UserDetails />
      </div>
    );
  }
}

export default withNavigationBarComponent(UserAdminPage);
