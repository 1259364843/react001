import { createStore, applyMiddleware, compose } from "redux";

import reducer from './reducer.js'
import thunk from "redux-thunk";

import createSagaMiddleware from 'redux-saga'
import saga from './saga';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

// 应用一些中间件
// 1.引入thunk中间件


// const store = createStore(reducer, storeEnhancer)

// 2.创建saga中间件
const sagaMiddleware = createSagaMiddleware()

const storeEnhancer = applyMiddleware(thunk,sagaMiddleware);
const store = createStore(reducer, composeEnhancers(storeEnhancer))

// 让saga中间件生效
sagaMiddleware.run(saga)

export default store