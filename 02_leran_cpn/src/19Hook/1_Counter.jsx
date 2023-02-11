import React, { useState } from 'react'

// 使用hooks
export default function Counter() {
  // 参数，初始化值
  // 返回值:数组,第一个是当前状态的值,第二个是设置状态值的函数
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setCount(count - 1)}>-1</button>
    </div>
  )
}