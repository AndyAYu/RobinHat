import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="navHeader">
            <div>
            <Link className="robinHat"to="/">
                <h2>Robinhat
                <img className="robinHatLogo" src={window.logoURL}/>
                </h2>
            </Link>
            </div>
            <div className="login-signup">
                <Link className="login-header"to="/login">
                    <h3>Login</h3>
                </Link>
                <Link className="signup-header"to="/signup">
                    <h3>Sign up</h3>
                </Link>
            </div>
        </nav>
    );
    const loggedInHeader = () => (
        <hgroup>
            <h2 className="logged-header">Welcome, {currentUser.email}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup> 
    );

    return currentUser ? loggedInHeader() : sessionLinks()
};

export default Header;