import React, { Component } from "react";
import "./UserViewPage.css";
import { getter } from "../../network";
import UserCard from "../UserCard/UserCard";
import { LoaderHOC } from "../../LoaderHOC";

class UserViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      userImgs: [],
      currentPage: 1
    };
  }
  componentDidMount() {
    this.fetchResponse();
  }

  fetchResponse = () => {
    this.props.showLoader();
    const TOTAL_RESULTS = 20;
    getter(
      "https://randomuser.me/api/?results=" +
        this.state.currentPage * TOTAL_RESULTS,
      this.successResponse,
      this.failureResponse
    );
  };

  successResponse = response => {
    if (response.results) {
      this.props.hideLoader();
      var images = [];
      var customResponse = response.results.map(v => {
        images.push(v.picture.large);
        return {
          gender: v.gender,
          name: v.name.title + " " + v.name.first + " " + v.name.last,
          city: v.city,
          country: v.country,
          email: v.email,
          dob: v.dob.date + ", Now : " + v.dob.age + " yrs",
          cell: v.cell
        };
      });
      this.setState(prevState => {
        return {
          ...prevState,
          response: Object.assign([], customResponse, prevState.response),
          userImgs: Object.assign([], images, prevState.userImgs)
        };
      });
    }
  };

  failureResponse = error => {
    this.props.hideLoader();
    this.props.showNotification("Network / API Error", error.toString());
  };

  userCardRenderer = () => {
    if (this.state.response !== "") {
      //continue to render the cards
      var userCards = [];
      this.state.response.forEach((v, i) => {
        userCards.push(
          <UserCard userTags={v} key={i} userImgSrc={this.state.userImgs[i]} />
        );
      });
    } else {
      //show loading screen
    }
    return userCards;
  };

  scrollEventHandler = e => {
    if (e.target.className.includes("user-view")) {
      if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
        this.setState(
          prevState => {
            return { ...prevState, currentPage: prevState.currentPage + 1 };
          },
          () => {
            this.fetchResponse();
          }
        );
      }
    }
  };

  render() {
    return (
      <div
        className="page user-view"
        onScroll={e => {
          this.scrollEventHandler(e);
        }}
      >
        {this.userCardRenderer()}
      </div>
    );
  }
}

export default LoaderHOC(UserViewPage);
