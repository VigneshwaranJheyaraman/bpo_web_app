import React, { Component } from "react";
import "./BPOIndex.css";
import { Switch, Route, Redirect } from "react-router-dom";
import UserAdminPage from "../UserAdminPage/UserAdminPage";
import UserViewPage from "../UserViewPage/UserViewPage";

class BPOIndex extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return <Redirect to="/admin" />;
          }}
        />
        <Route
          path="/admin"
          component={props => {
            return <UserAdminPage {...props} />;
          }}
        />
        <Route
          path="/view"
          component={props => {
            return <UserViewPage history={props.history} />;
          }}
        />
      </Switch>
    );
  }
}

export default BPOIndex;
