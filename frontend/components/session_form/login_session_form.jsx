import React from 'react';
import { Link } from 'react-router-dom';

class LoginSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    };
    
    componentWillUnmount() {
        this.props.removeErrors();
    };
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };
    
    handleDemoLogin(event) {
        event.preventDefault();
        const demoUser = {
            first_name: 'demo',
            last_name: 'user',
            email: "demo@gmail.com",
            password: "password"
        };
            this.props.processForm(demoUser);
    };

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    };

    renderErrors() {
        const errors = this.props.errors
        let array_errors = [];
        for (const error in errors) {
            array_errors.push(errors[error])
        }
        return(
            <ul>
            {array_errors.map((e,i) => {
                <li key={i} >
                    {e}
                </li>
                })}
            </ul>
    )
    };

render() {
    return (
            <div className="login-form-container">
                
                <div>
                    <img className="login-picture" src={window.loginPhotoURL} />
                </div>
            
                <div className="login-form">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                <h4>
                Log in to Robinhat
                </h4>
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
                <div className="loginBlackButton">
                    <input className="login-session-submit" type="submit" value={this.props.formType}/>
                    <br />
                    
                </div>
                <div>{this.props.prefix} {this.props.navLink}</div>
                </form>
                </div>
            </div>
    );

    
    }
}

export default LoginSessionForm;