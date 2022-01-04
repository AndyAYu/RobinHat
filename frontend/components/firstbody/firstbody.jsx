import React from 'react';
import { Link } from 'react-router-dom';
import phoneScroll from '../../../app/assets/images/phone-scrolling.png'

const FirstBody = ({ currentUser }) => {
    const firstBody = (      
        <div className="firstBody">
            <div className="leftFirstBody">
                <h1> 
                Investing for 
                <br />
                Everyone
                </h1>
                <div className="firstBody-text">
                <span>
                Commission-free investing, plus the tools 
                <br />
                you need to put your money in motion. Sign 
                <br />
                up and get your first stock for free. Certain
                <br />
                limitations and fees apply.
                </span>
                </div>
                <div >
                    <Link className="firstBodySignUp"to="/signup">
                    <p>Sign up</p>
                    </Link>
                    <br />
                    {/* <button> 
                        <div className="commissionsButton" class="modal">
                            <span class="commissionsInfo">
                                <h2>Commissions & Free Stock Disclosures
                                </h2>
                                <p className="commissions-content">Commission-free trading refers to $0 
                                    commissions for Robinhood Financial 
                                    self-directed individual cash or margin
                                    brokerage accounts that trade U.S. 
                                    listed and certain OTC securities 
                                    electronically. Keep in mind, other 
                                    fees such as trading (non-commission)
                                    fees, Gold subscription fees, wire transfer 
                                    fees, and paper statement fees may apply
                                    to your brokerage account. Please see 
                                    Robinhood Financial’s fee schedule to 
                                    learn more.
                                    </p>
                            </span>
                        </div>
                    </button> */}
                </div>
            </div>
            <img src={phoneScroll} className="phoneScroll"/>
            <br />
        </div>
        );
    const stockChart = (
        <h2>CHART</h2>
    )   
    return currentUser ? stockChart : firstBody
};

export default FirstBody;