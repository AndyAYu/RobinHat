import React from 'react';
import { connect } from 'react-redux'; 
import LineChart from './chartbody';

const mapStateToProps = ({entities,session},ownParams) => {
    let dict = new Object();
    entities.users[(session.id)].stocks.map(e => 
        dict[e.ticker] = e.amount)
    return {
        balance: entities.users[(session.id)].balance,
        stocks: dict,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: (user) => dispatch(fetchUserInfo(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LineChart);
