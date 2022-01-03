import React from 'react';
import { Link } from 'react-router-dom';

const FirstBody = ({ currentUser }) => {
    const firstBody = () => (      
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
        <Link className="firstBodySignUp" to="/signup">
        <h3>Sign up</h3>
        </Link>
        <br />
        </div>
        );
    const stockChart = () => (
        <h2>CHART</h2>
    )   
    return currentUser ? stockChart() : firstBody()
};

export default FirstBody;