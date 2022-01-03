import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/">
                <h2>Robinhat</h2>
                <img className="robinHat" src={window.logoURL}/>
            </Link>
            <Link className="login-header"to="/login">
                <h3>Login</h3>
            </Link>
            <br />
            <Link className="signup-header"to="/signup">
                <h3>Sign up</h3>
            </Link>
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