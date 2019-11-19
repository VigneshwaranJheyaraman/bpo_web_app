import React, { Component } from "react";
import "./NavigationItem.css";
import { connect } from "react-redux";
import { setCurrentMenu } from "../../redux/actions/navigatoinMenuActions";

const mapDispatchWithProps = dispatch => {
  return {
    updateCurrentMenu: (currentItem, cb) => {
      dispatch(setCurrentMenu(currentItem));
      cb();
    }
  };
};
class NavigationItem extends Component {
  updateCurrentMenu = () => {
    this.props.updateCurrentMenu(this.props.menuItem, () => {
      this.props.history.push(this.props.link);
    });
  };
  render() {
    return (
      <div
        className={this.props.isActive ? "nav-item active" : "nav-item"}
        onClick={this.updateCurrentMenu}
      >
        <img
          src={this.props.imgSrc}
          alt={
            this.props.navigationName
              ? this.props.navigationName
              : "Want to go here?"
          }
        />
        <p className="nav-title">{this.props.navigationName}</p>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchWithProps
)(NavigationItem);
