import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class LogOut extends Component {
    state = {
        redirect: false,
    };

    componentDidMount() {
        sessionStorage.setItem("userToken", '');
        sessionStorage.clear();
        this.setState({ redirect: true });
    }

    render() {
        return this.state.redirect ?
            <Redirect to={'/'} /> :
            null;
    }
}