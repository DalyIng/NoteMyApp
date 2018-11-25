import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li
            style={{
              fontStyle: "italic",
              fontFamily: "Garamond",
              fontSize: "25px"
            }}
          >
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2">
            <img
              src={this.props.auth.imageUrl}
              alt=""
              className="circle responsive-img"
              style={{
                marginRight: "15px",
                marginLeft: "20px",
                marginTop: "8px"
              }}
            />
          </li>,
          <li
            key="3"
            style={{
              fontStyle: "italic",
              fontFamily: "Garamond",
              fontSize: "25px",
              marginRight: "5px",
              marginLeft: "5px"
            }}
          >
            Credits: {this.props.auth.credits}
          </li>,
          <li
            key="4"
            style={{
              fontStyle: "italic",
              fontFamily: "Garamond",
              fontSize: "25px"
            }}
          >
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper blue-grey darken-4">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="brand-logo"
            style={{
              fontStyle: "italic",
              fontFamily: "Garamond",
              fontSize: "25px",
              marginLeft: "8px"
            }}
          >
            RateMyApp
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
