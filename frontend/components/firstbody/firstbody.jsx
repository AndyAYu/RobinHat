import React from 'react';
import { Link } from 'react-router-dom';

class firstBody extends React.Component {

    render() {
        return (
            <div className="firstBody">
                <p className="firstBodyInvesting"> 
                    Investing for 
                    <br />
                    Everyone
                </p>
                <div className="firstBody-text">
                <p>
                Commission-free investing, plus the tools 
                </p>
                <p>
                you need to put your money in motion. Sign 
                </p>
                <p> 
                up and get your first stock for free. Certain
                </p>
                <p>
                limitations and fees apply.
                </p>
                </div>
                <Link className="signup-body" to="/signup">
                    <h3>Sign up</h3>
                </Link>
                <br />
            </div>
        );
    }
}

export default firstBody;