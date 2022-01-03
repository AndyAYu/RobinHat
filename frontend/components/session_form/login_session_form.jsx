import React from 'react';
import loginpicture from '../images/login-page-img.jpeg';


class LoginSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
        <body>
            <div className="login-form-container">
                <img className="login-picture" src={loginpicture}/>
            <form onSubmit={this.handleSubmit} className="login-form-box">
            Log in to Robinhat
            <br />
            {this.renderErrors()}
            <div className="login-form">
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
            </div>
            </form>
            </div>
        </body>
        
    );
    }
}

export default LoginSessionForm;