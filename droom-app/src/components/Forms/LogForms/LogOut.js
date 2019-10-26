import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class LogOut extends Component {
  state = {
    navigate: false
  };

  logout = () => {
    localStorage.clear("token");
    this.setState({ navigate: true });
    this.props.history.push(`/`);
  };

  render() {
    const { navigate } = this.state;

    if (navigate) {
      return <Redirect to="/" push={true} />;
    }
    return (
      <Link to="/" onClick={this.logout}>
        Log Out
      </Link>
    );
  }
}

export default LogOut;
