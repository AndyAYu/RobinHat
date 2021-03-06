import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './search_bar/search_bar';
import Allstocks from './search_bar/all_stock_ticker_and_name.json'

const stockNames = Allstocks

const filterStocks = (stockNames, query) => {
    const tickers = Object.keys(stockNames)
    const companyNames = Object.values(stockNames)
    
    if (!query) {
        return [];
    }

    const filteredTickers = tickers.filter(e => e.startsWith((query.toUpperCase())))
    const filteredTickersIndex = filteredTickers.map(e => (tickers.indexOf(e)));
    const filteredCompanyNames = filteredTickersIndex.map(e => companyNames[e])
    let finalResults = [];
    for (const element of filteredTickers){
        const shiftedCompanyName = filteredCompanyNames.shift()
        
        if (finalResults.length < 5) {
            finalResults.push(`${element}: ${shiftedCompanyName}`)
        }
    }
    return finalResults
    ;
};

const Header = ({ history, currentUser, logout }) => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredStocks = filterStocks(stockNames, searchQuery);

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
    
    

    const loggedInHeader = () => {
        return (<hgroup className="logged-header">
            <div className="loggedInHeaderLeft">
                <Link className="logged-in-robinhat-logo"to="/">
                    <img className="robinHatLogo" src={window.logoURL} />
                </Link>
                    <div className="App">
                        <SearchBar
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />
                        <ul className="stockResults">
                            {filteredStocks.map((tickerName,index) => (
                                <a className="tickerName"
                                key={index}
                                href={`/#/stock/${tickerName.split(":")[0]}`}
                                onClick={()=> {
                                }}
                                >
                                {tickerName}
                                </a>
                            ))}
                        </ul>
                    </div>
            </div>
            <div className="loggedInHeaderRight">
                <a target ="_blank" href="https://www.linkedin.com/in/andy-yu-18422b230/">LinkedIn</a>
                <a target ="_blank" href="https://github.com/AndyAYu">GitHub</a>
                <a target ="_blank" href="https://angel.co/u/andy-yu-the-human">AngelList</a>
            <button className="header-button" onClick={logout}>Log Out</button>
            </div>
        </hgroup> 

        )
    };

    return currentUser ? loggedInHeader() : sessionLinks()
};

export default Header;