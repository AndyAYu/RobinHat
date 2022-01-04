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
                    <h4>It's your turn</h4>
                    <p>No minimum account balances or special status requirements</p>
                </div>

                <div className="second-section-text-two">
                    <h4>Be one of the first</h4>
                    <p>Request shares in new companies before their stock starts
                        trading on public exchanges.
                    </p>
                </div>

                <div className="second-section-text-three">
                    <h4>Get a fair shot</h4>
                    <p>While IPO shares are limited, IPO Access gives you 
                        the same opportunity to invest, regardless of 
                        order size or account value.
                    </p>
                </div>
            </div>

        </div>
    </div>
)

export default SecondBody