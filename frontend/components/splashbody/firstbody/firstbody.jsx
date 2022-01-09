import React from 'react';
import { Link } from 'react-router-dom';
import SplashBody from '../splashbody';
import StockChart from '../chartbody/chartbody'


class FirstBody extends React.Component {

    constructor(props) {
        super(props)
    }
        
        render () {
            return this.props.currentUser ? <StockChart/> : <SplashBody/>
        }
    }

    
export default FirstBody;