import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './search_bar/search_bar';

const posts = [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
];

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
                <SearchBar/>
            </div>
            </div>
            <div className="loggedInHeaderRight">
                <a target ="_blank" href="https://www.linkedin.com/in/andy-yu-18422b230/">LinkedIn</a>
                <a target ="_blank" href="https://github.com/AndyAYu">GitHub</a>
                <a target ="_blank" href="https://angel.co/u/andy-yu-the-human">AngelList</a>
            <button className="header-button" onClick={logout}>Log Out</button>
            </div>
        </hgroup> 

        
    );

    return currentUser ? loggedInHeader() : sessionLinks()
};

export default Header;