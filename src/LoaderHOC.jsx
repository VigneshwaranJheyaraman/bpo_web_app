import React, { Component } from "react";
import Notifier from "./components/Notifier/Notifier";

export const LoaderHOC = ChildComponenet => {
  return class withLoaderComp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
        errorTitle: "",
        errorMessage: ""
      };
    }
    showLoader = () => {
      this.setState({
        isLoading: true
      });
    };
    hideLoader = () => {
      this.setState({
        isLoading: false
      });
    };
    showNotification = (eTitle, eMsg) => {
      this.setState({
        errorTitle: eTitle,
        errorMessage: eMsg
      });
    };
    notifierClosed = () => {
      this.setState({
        errorMessage: "",
        errorTitle: ""
      });
    };
    render() {
      return (
        <div className="page">
          {this.state.isLoading ? (
            <div className="overlay">
              <div className="loader" />
            </div>
          ) : (
            ""
          )}
          <ChildComponenet
            {...this.props}
            showLoader={this.showLoader}
            showNotification={this.showNotification}
            hideLoader={this.hideLoader}
          />
          <Notifier
            display={
              this.state.errorMessage !== "" || this.state.errorTitle !== ""
                ? "block"
                : "none"
            }
            notificationTitle={this.state.errorTitle}
            notificationMessage={this.state.errorMessage}
            notificationClosed={this.notifierClosed}
          />
        </div>
      );
    }
  };
};
