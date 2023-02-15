import React from 'react';
import { connect } from 'react-redux'; 
import LineChart from './chartbody';

const mapStateToProps = ({entities,session},ownParams) => {
    return {
        balance: entities.users[(session.id)].balance,
        stocks: entities.users[(session.id)].stocks.map(e => e.ticker),
        amount: entities.users[(session.id)].stocks.map(e => e.amount),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: (user) => dispatch(fetchUserInfo(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LineChart);
