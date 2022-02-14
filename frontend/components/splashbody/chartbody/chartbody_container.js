import React from 'react';
import { connect } from 'react-redux'; 
import LineChart from './chartbody';

const mapStateToProps = ({entities,session},ownParams) => {
    // debugger
    return {
        stocks: entities.users[1].stocks.map(e => e.ticker)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: (user) => dispatch(fetchUserInfo(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LineChart);
