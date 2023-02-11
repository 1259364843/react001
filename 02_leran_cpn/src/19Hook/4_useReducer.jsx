import React, {useReducer} from 'react';

// 定义函数对state进行操作
function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      // 对原来state加一
      return {...state, counter: state.counter + 1}
    case 'decrement':
      return {...state, counter: state.counter - 1}
    case 'add': 
      return {...state, counter: state.counter + action.payload}
    default:
      return state;
  }
}

// 对useState进行替换
function UseReducer() {
  // 接收参数
  // 1.reducer纯函数
  // 2.初始化值
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  return (
    <div>
      <h2>当前计数: {state.counter}</h2>
      <button onClick={e => dispatch({type: 'increment'})}>+1</button>
      <button onClick={e => dispatch({type: 'decrement'})}>-1</button>
      <button onClick={e => dispatch({type: 'add', payload: 5 })}>+5</button>
    </div>
  );
}

export default UseReducer;
