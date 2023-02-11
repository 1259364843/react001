import React, {useLayoutEffect, useState} from 'react';

function UseLayoutEffect() {
  const [count, setCount] = useState(10)
  useLayoutEffect(() => {
    if (count === 0) {
      // 生成唯一随机数
        setCount(Math.random().toString(16).slice(2))
    }
  }, [count])
  return (
    <div>
    <h2>数字：{count}</h2>
    <button onClick={e => setCount(0)}>修改数组</button>
    </div>
  )
}

export default UseLayoutEffect;
