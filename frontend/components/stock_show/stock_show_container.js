import React from "react";
import {connect} from 'react-redux';
import StockShow from './stock_show';

const mSTP = state => {
    debugger
    test: state
}

const mDTP = dispatch => {
    return {

    };
};

export default connect(mSTP, mDTP)(StockShow);