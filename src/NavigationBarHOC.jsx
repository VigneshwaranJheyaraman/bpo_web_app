import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Provider } from "react-redux";
import { store } from "./redux";

export const withNavigationBarComponent = ChildComponent => {
  return class withNavigationBar extends Component {
    render() {
      return (
        <div className="page">
          <Provider store={store}>
            <NavBar history={this.props.history} />
          </Provider>
          <ChildComponent {...this.props} />
        </div>
      );
    }
  };
};
