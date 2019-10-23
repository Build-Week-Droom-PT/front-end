import React from "react";
import axios from "axios";

export default class SignUp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            email: "",
            isCompany: true,
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    changeHandler(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            isCompany: this.state.isCompany,
        };
        console.log(newUser);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.changeHandler}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.changeHandler}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={this.changeHandler}
                    />

                    <label>
                        Check if you are a company:
                        <input
                            type="checkbox"
                            name="isCompany"
                            checked={this.state.isCompany}
                            onChange={this.changeHandler}
                        />
                    </label>
                    <button type="submit">Submit!</button>
                </form>
            </div>
        )
    }
}