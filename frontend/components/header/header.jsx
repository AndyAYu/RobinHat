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
            <div className="loggedInHeaderLeft">
            <Link className="logged-in-robinhat-logo"to="/">
                <img className="robinHatLogo" src={window.logoURL} />
            </Link>
            <div>
                <input type="text" id="header-search" placeholder="Search"/>
            </div>
            </div>
            <div className="loggedInHeaderRight">
                <a href="https://www.google.com">LinkedIn</a>
                <a href="https://www.google.com">GitHub</a>
                <a href="https://www.google.com">Other</a>
            <button className="header-button" onClick={logout}>Log Out</button>
            </div>
        </hgroup> 

        
    );

    return currentUser ? loggedInHeader() : sessionLinks()
};

export default Header;