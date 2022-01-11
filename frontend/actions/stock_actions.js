export const RECEIVE_USER_STOCKS = 'RECEIVE_USER_STOCKS';
export const NEW_USER_STOCK = 'NEW_USER_STOCK';
import * as SessionApiUtil from '../util/session_api_util';
import { fetchUserInfo } from './session_action';

const receiveUserStocks = (stockInfo) => ({
    type: RECEIVE_USER_STOCKS,
    stockInfo
})

export const fetchUserStockInfo = (userId) => dispatch => (
    SessionApiUtil.fetchUserStockInfo(userId)
    .then(stockInfo => {
        dispatch(receiveUserStocks(stockInfo))
    })
)

export const updateUserStockInfo = (userId, ticker, amount, unit_price) => dispatch => (
    SessionApiUtil.updateUserStockInfo(userId, ticker, amount, unit_price).then(() => {
        dispatch(fetchUserStockInfo(userId))
        dispatch(fetchUserInfo(userId))
    })
)