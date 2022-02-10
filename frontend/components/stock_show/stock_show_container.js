import React from "react";
import {connect} from 'react-redux';
import StockShow from './stock_show';

const mSTP = ({ entities, session }, ownParams ) => {
    const id = session.id
    return {
        ticker: ownParams.location.pathname.split("/")[2],
        balance: entities.users[`${id}`]
    }
}

const mDTP = dispatch => {
    return{
        fetchUserStock: (userId) => dispatch(fetchUserStockInfo(userId))
    }
};

export default connect(mSTP, mDTP)(StockShow);