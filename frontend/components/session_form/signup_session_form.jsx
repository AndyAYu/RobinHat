import React from 'react';
import { SIGN_UP } from '../../actions/session_actions';
import { Link } from 'react-router-dom';


class SignUpSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    };

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <img className="robinHatPlusLogo" src={window.robinHatPlusLogoURL}/>
                    <br />
                    <div>
                        <h2>Make Your Money Move</h2>
                        <p>Robinhat lets you invest in companies, you love, <br />
                            commission-free.
                        </p>
                        <span>Please enter your full legal name. Your legal name should <br />
                        match any form of government ID.
                        </span>
                    </div>
                    <div className="signup-form">
                        <br />
                    {this.renderErrors()}
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signup-input"
                                />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"
                                />
                        </label>
                        <br />
                        <input className="signup-session-submit" type="submit" value={this.props.formType} />
                                {this.props.prefix} {this.props.navLink}
                    </div>
                </form>
                <div className="signup-form-right">
                    <section>
                        <h4>Commission-free trading</h4>
                        <span>Break free from commission-fees and <br />
                        make unlimited commission-free <br />
                        trades in stocks, funds, and options <br />
                        with Robinhood Financial. Other fees <br />
                        may apply. View our 
                        <div>
                        <Link>
                        fee schedule
                        </Link>
                        </div>
                        to <br />
                        learn more.
                        </span>
                    </section>

                    <section>
                        <h4>Account Protection</h4>
                        <span>Robinhood Financial is a member of<br />
                        SIPC. Securities in your account <br />
                        protected up to $500,000. For details, <br />
                        please see 
                        <Link>www.sipc.org</Link>
                        </span>
                    </section>

                    <section>
                        <h4>Stay on top of your portfolio</h4>
                        <span>
                            Set up customized news and <br />
                            notifications to stay on top of your <br />
                            assets as casually or as relentlessly <br />
                            as you like. Controlling the flow of info <br />
                            is up to you.
                        </span>
                    </section>
                </div>
            </div>
        );
    }
}

export default SignUpSessionForm;