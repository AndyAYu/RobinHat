import React from 'react';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
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
        <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
            Robinhat
            <br />
            {this.props.prefix} {this.props.navLink}
            {this.renderErrors()}
            <div className="login-form">
            <br />
            <label>Email:
                <input type="text"
                value={this.state.Email}
                onChange={this.update('Email')}
                className="login-input"
                />
            </label>
                <br />
            <label>Password:
                <input type="text"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            </label>
            <br />
                <input className="session-submit" type="submit" value={this.props.formType}/>
            </div>
            </form>
        </div>
    );
    }
}

export default SessionForm;