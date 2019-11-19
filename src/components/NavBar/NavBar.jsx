import React, { Component } from "react";
import "./NavBar.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { connect } from "react-redux";
import { getCurrentMenuPosition } from "../../redux/actions/navigatoinMenuActions";

const mapStateWithProps = state => {
  return {
    currentMenu: getCurrentMenuPosition(state.navigationMenu)
  };
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationLink: [
        { imgSrc: "/favicon.ico", navigationName: "Home", link: "/home" },
        { imgSrc: "/favicon.ico", navigationName: "View", link: "/view" },
        { imgSrc: "/favicon.ico", navigationName: "Update", link: "/admin" },
        { imgSrc: "/favicon.ico", navigationName: "About", link: "/about" }
      ]
    };
  }

  navigationBarRender = () => {
    return this.state.navigationLink.map((v, i) => {
      return (
        <NavigationItem
          {...v}
          isActive={i === this.props.currentMenu}
          menuItem={i}
          key={i}
          history={this.props.history}
        />
      );
    });
  };

  render() {
    return <div className="nav-bar">{this.navigationBarRender()}</div>;
  }
}

export default connect(mapStateWithProps)(NavBar);
