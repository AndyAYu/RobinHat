import React from 'react';
import { Link } from 'react-router-dom';
import SplashBody from '../splashbody';

const stockChart = () => (
    <h2 className="chart">CHART</h2>
    )
class FirstBody extends React.Component {

    constructor(props) {
        super(props)
    }
        
        render () {
            return this.props.currentUser ? stockChart() : <SplashBody/>
        }
    }

    
export default FirstBody;