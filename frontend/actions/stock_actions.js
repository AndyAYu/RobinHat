import * as SessionApiUtil from '../util/session_api_util';
import { fetchUserInfo } from './session_actions';


export const RECEIVE_USER_STOCKS = 'RECEIVE_USER_STOCKS';
export const NEW_USER_STOCK = 'NEW_USER_STOCK';

const receiveUserStocks = (stockInfo) => ({
    type: RECEIVE_USER_STOCKS,
    stockInfo
})

export const fetchUserStockInfo = (userId) => dispatch => (
    SessionApiUtil.fetchUserStockInfo(userId)
    .then(() => {
        dispatch(receiveUserStocks(userId))
    })
)

export const updateUserStockInfo = (userId, ticker, amount, unit_price) => dispatch => (
    SessionApiUtil.updateUserStockInfo(userId, ticker, amount, unit_price).then(() => {
        dispatch(fetchUserStockInfo(userId))
        dispatch(fetchUserInfo(userId))
    })
)