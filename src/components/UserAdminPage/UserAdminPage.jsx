import React, { Component } from "react";
import "./UserAdminPage.css";
import NavBar from "../NavBar/NavBar";
import { Provider } from "react-redux";
import { store } from "../../redux/index";
import UserDetails from "../UserDetails/UserDetails";

class UserAdminPage extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="page">
          <NavBar history={this.props.history} />
          <UserDetails />
        </div>
      </Provider>
    );
  }
}

export default UserAdminPage;
