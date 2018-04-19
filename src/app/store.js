import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

//reducers
import lenderReducer from './reducers/lenderReducer';
import loginReducer from './reducers/loginReducer';
import txReducer from './reducers/TxReducer';
import appLoanRed from './reducers/AppLoansReducer';
import reqtReducer from './reducers/MyReqtReducer';

const store = createStore(combineReducers({ loginReducer, lenderReducer, txReducer, appLoanRed, reqtReducer }),
 {}, applyMiddleware(logger, thunk, promiseMiddleware()));
export default store;
