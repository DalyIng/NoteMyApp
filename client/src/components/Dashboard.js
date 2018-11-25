import React, { Component } from "react";
import { connect } from "react-redux";

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
        <div style={{ textAlign: "center" }}>
          <h1>RateMyApp!</h1>
          {this.renderContent()}
          Collect feedback form your users
        </div>  
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashbord);
