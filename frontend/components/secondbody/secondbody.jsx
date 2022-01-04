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
                <p>Introducing IPO Access</p>
                <p>
                    Get in at the IPO price. Now you can become one of
                    the first public
                </p>
                <p>
                    investors in the upcoming IPOs.
                </p>
            </div>

        </div>
    </div>
)

export default SecondBody