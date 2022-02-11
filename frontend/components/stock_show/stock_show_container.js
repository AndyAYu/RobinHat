import React from "react";
import {connect} from 'react-redux';
import StockShow from './stock_show';
import { updateUserStockInfo } from '../../actions/stock_actions';

const mSTP = ({ entities, session }, ownParams ) => {
    const id = session.id
    // debugger
    return {
        userId: id,
        ticker: ownParams.location.pathname.split("/")[2],
        balance: entities.users[`${id}`].balance,
    }
}

const mDTP = dispatch => {
    return{
        updateUserStockInfo: (user) => dispatch(updateUserStockInfo(user))
    }
};

export default connect(mSTP, mDTP)(StockShow);