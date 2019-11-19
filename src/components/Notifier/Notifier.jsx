import React, { Component } from "react";
import "./Notifier.css";

class Notifier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeNotification: false
    };
  }

  closeNotifier = () => {
    this.setState(
      {
        closeNotification: true
      },
      () => {
        this.props.notificationClosed();
      }
    );
  };
  render() {
    return !this.state.closeNotification ? (
      <div
        className="notification"
        style={{
          display: this.props.display
        }}
      >
        <div className="not-head">
          <h3>{this.props.notificationTitle}</h3>
          <div className="close-btn" onClick={this.closeNotifier} />
        </div>
        <p className="not-body">{this.props.notificationMessage}</p>
      </div>
    ) : (
      ""
    );
  }
}

export default Notifier;
