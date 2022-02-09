import React from 'react';
import { connect } from 'react-redux'; 
import LineChart from './chartbody';

const mapStateToProps = state => {
    return {
        portfolioValue: state.session.balance
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: (user) => dispatch(fetchUserInfo(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LineChart);
