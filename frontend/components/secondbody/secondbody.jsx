import React from 'react';

const SecondBody = () => (
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
            <img className="intro-frac-right"src={window.coolShapesPhotoURL}/>
        </div>
    </div>

)

export default SecondBody