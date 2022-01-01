import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const loggedInHeader = () => (
        <hgroup>
            <h2 className="logged-header">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? loggedInHeader() : sessionLinks()
};

export default Header;