import React from 'react';
import loginpicture from '../../../app/assets/images/login-page-img.jpeg';
import { Link } from 'react-router-dom'


class LoginSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    
    handleDemoLogin(event) {
        event.preventDefault();
        const demoUser = {
            email: "demo@gmail.com",
            password: "password"
        };
            this.props.processForm(demoUser);
        // else {
        //     this.props.demoLogin(demoUser);
        // }
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    };

    renderErrors() {
        return(
            <ul>
            {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>
            ))}
        </ul>
    )
    }

    

render() {
    return (
            <div className="login-form-container">
                
                <div>
                    <img className="login-picture" src={loginpicture}/>
                </div>
            
                <div className="login-form">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                Log in to Robinhat
                <br />
                {this.renderErrors()}
                <Link to="/"
                    onClick={this.handleDemoLogin}
                    className="demo-button"
                >Demo User</Link>
                <br />
                <label>Email
                    <br />
                    <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                    />
                </label>
                    <br />
                <label>Password
                    <br />
                    <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    />
                </label>
                <br />
                    <input className="login-session-submit" type="submit" value={this.props.formType}/>
                    <br />
                    {this.props.prefix} {this.props.navLink}
                </form>
                </div>
            </div>
    );
    }
}

export default LoginSessionForm;