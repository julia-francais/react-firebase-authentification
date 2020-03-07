import React, { Component } from "react";

import { withFirebase } from "../Firebase";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const PasswordChangeForm extends Component {
    constructor(props){
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { passwordOne } = this.state;

        this.props.withFirebase
        .doPasswordUpdate(passwordOne)
        .then(() => {
            this.ListeningStateChangedEvent({ ...INITIAL_STATE});
        })
        .catch(error => {
            this.ListeningStateChangedEvent({error});
        });
        event.preventDefault();
    };

    onChange = event => {
        this.ListeningStateChangedEvent({ [event.target.name]: event.target.value});
    };

    render() {
        const { passwordOne, passwordTwo, error } = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

        return (
            <form> onSubmit={this.onSubmit}

            </form>
        )
    }
} (
  <div>
    <h1>PasswordChange</h1>
  </div>
);

export default PasswordChange;
