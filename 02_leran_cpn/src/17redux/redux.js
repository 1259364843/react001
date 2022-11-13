// 1.导入redux
const redux = require('redux')

// 初始化状态
const initialState = {
  count: 0
}
// reducer
// 纯函数
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {...state, count: state.count + 1}
    case "ADD":
      return {...state, count: state.count + action.num}
    default:
      return state
  }
}

// store
// 创建store时需要传入一个reducer
const store = redux.createStore(reducer)
// 订阅修改
store.subscribe(() => {
  console.log('改变', store.getState().count);
})


// action
const action1 = {
  type: "INCREMENT"
}
const action2 = {
  type: "ADD",
  num: 2
}

// 派发action
store.dispatch(action1)
store.dispatch(action2)

