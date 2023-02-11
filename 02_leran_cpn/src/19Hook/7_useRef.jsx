import React, { useState, useRef, PureComponent, forwardRef, useEffect } from 'react';

const UseRef = () => {
  const titleRef = useRef()
  const inputRef = useRef()
  const testRef1 = useRef()
  const testRef2 = useRef()
  const changeTitle = () => {
    titleRef.current.innerHTML = "修改之后的标题😄"
  }
  const changeInput = () => {
    inputRef.current.value = "输入你的名字"
    inputRef.current.focus()
  }
  const changeTest = () => {
    console.log(testRef1);
    console.log(testRef2);
    // testRef.current.innerHTML = "改变类组件👌🏻"
  }
  return (
    <div>
      <h2 ref={titleRef}>UseRef</h2>
      <input ref={inputRef}></input>
      {/*子组件-类组件*/}
      <TestCpn ref={testRef1}/>
      <TestCpn2 ref={testRef2}/>
      <button onClick={e => changeTitle()}>修改标题</button>
      <button onClick={e => changeInput()}>填充输入框</button>
      <button onClick={e => changeTest()}>打印子组件</button>
    </div>
  );
}

// 使用组件的ref,必须是类组件

class TestCpn extends PureComponent {
  render() {
    return (
      <div>
        <h2>TestCpn</h2>
      </div>
    )
  }
}

const TestCpn2 = forwardRef(() => {
  return(
    <div>
      <h2>函数式组件test</h2>
    </div>
  )
})



// ref中保存其他数据
const RefDemo2 = () => {
  const [count, setCount] = useState(0)
  // 直接传入数字,存在ref的current中
  // const numRef = useRef(10)
  const numRef = useRef(count)
  return(
    <div>
      <h2>当前数字:{count}</h2>
      <h2>当前数字ref:{numRef.current}</h2>
      <button onClick={e => setCount(count + 10)}>+10</button>
    </div>
  )
}
const RefDemo3 = () => {
  const [count, setCount] = useState(0)
  const numRef = useRef(count)
  useEffect(() => {
    numRef.current = count
  }, [count]);
  return(
    <div>
      <h2>上一次的值:{numRef.current}</h2>
      <h2>当前值:{count}</h2>
      <button onClick={e => setCount(count + 10)}>+10</button>
    </div>
  )
}
export {
  RefDemo2,
  RefDemo3
}
export default UseRef;
