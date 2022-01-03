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
                <br />
                Commission-free investing, plus the tools 
                <br />
                you need to put your money in motion. Sign 
                <br />
                up and get your first stock for free. Certain
                <br />
                limitations and fees apply.
                <br />
                <Link className="signup-body" to="/signup">
                    <h3>Sign up</h3>
                </Link>
                <br />
            </div>
        );
    }
}

export default firstBody;