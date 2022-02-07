import React from "react";
import {connect} from 'react-redux';
import StockShow from './stock_show';


const mSTP = ({entities, session}, ownParams) => ({
    // ticker: ownParams.match.params.ticker,
    // current_stocks: entities.stocks.current_stocks,
    // currentUser: entities.users[session.currentUserId],
})

const mDTP = dispatch => {
    return {

    };
};

export default connect(mSTP, mDTP)(StockShow);