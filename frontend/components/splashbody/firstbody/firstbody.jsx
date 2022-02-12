import React from 'react';
import { Link } from 'react-router-dom';
import SplashBody from '../splashbody';
import ChartBody from '../chartbody/chartbody_container'


class FirstBody extends React.Component {

    constructor(props) {
        super(props)
    }
        
        render () {
            return this.props.currentUser ? <ChartBody/> : <SplashBody/>
        }
    }

    
export default FirstBody;