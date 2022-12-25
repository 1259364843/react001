import { createStore, applyMiddleware } from "redux";

import reducer from './reducer.js'
import thunk from "redux-thunk";

// 应用一些中间件
const storeEnhancer = applyMiddleware(thunk);

const store = createStore(reducer, storeEnhancer)

export default store