import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
// import { Button } from "semantic-ui-react";

class LogOut extends Component {
    state = {
        navigate: false
    };

    logout = () => {
        localStorage.clear("token");
        this.setState({ navigate: true })
    };

    render() {
        const { navigate } = this.state; 

        if (navigate) {
            return <Redirect to ="/" push={true} />
        }

        return <button className="profile-button link" onClick={this.logout}>Log Out</button>
    }
}

export default LogOut; 

