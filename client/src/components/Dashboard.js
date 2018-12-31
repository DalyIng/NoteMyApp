import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Dashbord extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <blockquote>
            <h1>
              Hello {this.props.auth.givenName} {this.props.auth.familyName}
            </h1>
          </blockquote>
        );
    }
  }
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>RateMyApp!</h1>
          {this.renderContent()}
          Collect feedback form your users
        </div>
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red darken-4 pulse">
            <i className="material-icons">chat_bubble_outline</i>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashbord);
