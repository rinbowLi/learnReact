import {createStore,applyMiddleware} from 'redux'

import reducer from './reducer.js'
import thunkMiddleware  from 'redux-thunk'

const storeEnhance =applyMiddleware(thunkMiddleware)

const store = createStore(reducer,storeEnhance);
export default store;