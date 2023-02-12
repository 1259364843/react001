import React, {useState, useEffect} from 'react';

// 生命周期
export default function App() {
const [counter, setCounter] = useState(0);
useEffect(() => {
  // document.title = counter
    console.log("订阅一些事件");
    return () => {
        console.log("取消订阅事件");
    }
}, [counter])
return (
    <div>
        <h3>03模拟订阅和取消订阅</h3>
        <hr />
      <h2>当前计数：{counter}</h2>
    <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
)
}