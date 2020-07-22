import { createStore, applyMiddleware, compose } from 'redux'

import reducer from './reducer.js'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeEnhance = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, composeEnhancers(storeEnhance));
export default store;