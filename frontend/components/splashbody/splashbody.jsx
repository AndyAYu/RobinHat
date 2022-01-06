import React from 'react';
import {Link} from 'react-router-dom';

class SplashBody extends React.Component {        
    render() {
        return (
            <>
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
                        <Link className="firstBodySignUp" to="/signup">
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
                <img className="phoneScroll" src={window.phoneScrollPhotoURL} />
                <br />
            </div>
                <div className="secondBody">
                    <section className="first-section">
                        <span className="fee-schedule">
                            See our fee schedule to learn more about cost.
                        </span>
                    </section>
                    <div className="second-section">
                        <div>
                            <img src={window.balloonPhotoURL} />
                        </div>

                        <div className="second-section-text">
                            <h2>Introducing IPO Access</h2>
                            <br />
                            <p>
                                Get in at the IPO price. Now you can become one of
                                the first public
                                <br />
                                investors in the upcoming IPOs.
                            </p>

                            <div className="second-section-text-one">
                                <h4 className="sst">It's your turn</h4>
                                <br />
                                <p>No minimum account balances or special status requirements</p>
                            </div>

                            <div className="second-section-text-two">
                                <h4 className="sst">Be one of the first</h4>
                                <br />
                                <p>Request shares in new companies before their stock starts
                                    trading on public exchanges.
                                </p>
                            </div>

                            <div className="second-section-text-three">
                                <h4 className="sst">Get a fair shot</h4>
                                <br />
                                <p>While IPO shares are limited, IPO Access gives you
                                    the same opportunity to invest, regardless of
                                    order size or account value.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="intro-frac">
                        <div className="intro-frac-left">
                            <div className="intro-frac-left-1">
                                <p className="ifl11">Introducing Fractional Shares</p>
                                <br />
                                <p className="ifl12">Invest in thousands of stocks with as little as $1.</p>
                            </div>
                            <div className="intro-frac-left-2">
                                <section className="ifls1">Invest Any Amount
                                    <p className="iflsp1">
                                        Choose how much you want to <br />
                                        invest, and we'll convert from <br />
                                        dollars to parts of a whole <br />
                                        share.
                                    </p>
                                </section>
                                <section className="ifls2">Build a Balanced Portfolio
                                    <p className="iflsp2">
                                        Customize your portfolio with <br />
                                        pieces of different companies <br />
                                        and funds to help reduce risk. <br />
                                    </p>
                                </section>
                                <section className="ifls3">Trade in Real Time
                                    <p className="iflsp3">
                                        Trades placed during market <br />
                                        hours are executed at that <br />
                                        time, so you'll always know <br />
                                        the share price.
                                    </p>
                                </section>
                            </div>
                            <div className="intro-frac-left-3">
                                <p>Fractional Shares Disclosure</p>
                            </div>
                        </div>
                        <img className="intro-frac-right" src={window.coolShapesPhotoURL} />
                    </div>
                </div>
                </>
        )
    }
}

export default SplashBody