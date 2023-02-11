import React, { memo, useMemo, useState } from 'react'

const calcNumber = (count) => {
  // 计算0到count的和
  console.log("calcNumber重新计算");
  let total = 0;
  for (let i = 0; i <= count; i++) {
      total += i;
  }
  return total
}

export default function App() {
  const [count, setCount] = useState(10)
  const [show, setShow] = useState(true)
  // 不使用useMemo,点击show切换时会重新调用calcNumber计算值
  // const total = calcNumber(count)
  const total = useMemo(() => calcNumber(count), [count])
  return (
    <div>
      <h2>计算数字的和：{total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  )
}


// useMemo例子2
const Info = memo((props) => {
  console.log('Info组件重新渲染');
  return <h2>姓名:{props.info.name},年龄:{props.info.age}</h2>
})
const Memo2 = () => {
  console.log('组件重新渲染');
  // const info = {
  //   name: '张三',
  //   age: 22
  // }
  const info = useMemo(() => {
    return {
      name: '张三',
      age: 22
    }
  }, [])
  const [show, setShow] = useState(true)
  return (
    <div>
      <Info info={info} />
      <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  )
}

export {Memo2}