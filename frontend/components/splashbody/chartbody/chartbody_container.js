import React from 'react';
import { connect } from 'react-redux'; 
import LineChart from './chartbody';

const mapStateToProps = state => {
    const currentUser = state.entities.users[state.session.id]
    return {
        portfolioValue: currentUser.portfolioValue
    }
}

const mapDispatchToProps = dispatch => {
    return null;
}

export default connect(mapStateToProps,mapDispatchToProps)(LineChart);