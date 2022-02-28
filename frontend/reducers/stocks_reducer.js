import { RECEIVE_USER_STOCKS } from "../actions/stock_actions";


const _nullSession = {
  stock_history: [],
  current_stocks: {}
}




const stocksReducer = (state=_nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER_STOCKS:
      return action.stockInfo
    default:
      return state
  }
}

export default stocksReducer;