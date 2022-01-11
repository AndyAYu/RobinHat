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
                    <p>
                    Log In
                    </p>
                </Link>
                <Link className="signup-header"to="/signup">
                    <p>
                    Sign Up
                    </p>
                </Link>
            </div>
        </nav>
    );
    const loggedInHeader = () => (
        <hgroup className="logged-header">
            <Link className="logged-in-robinhat-logo"to="/">
                <img className="robinHatLogo" src={window.logoURL} />
            </Link>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup> 

        
    );

    return currentUser ? loggedInHeader() : sessionLinks()
};

export default Header;