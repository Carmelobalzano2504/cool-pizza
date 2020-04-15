import React, { Component } from 'react';

import LoginForm from './loginForm';

class Login extends Component {

    onSubmit = (fields) => {
        this.props.login(fields);
        this.props.history.push('/loginForm');
    }
    render() {
        return (
            <div className='login__link' onClick={() => {
                <LoginForm onSubmit={this.onSubmit} className='login__form' />
            }}>
                <LoginForm/>
            </div>
        )
    }
}

export default Login;