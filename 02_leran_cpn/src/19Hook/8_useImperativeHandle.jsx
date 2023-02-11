import React, { forwardRef, useRef,useImperativeHandle } from 'react'

// forwardRef使用
const Sinput = forwardRef((props, ref) => {
  {/*内部ref*/}
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
      focus: () => {
          inputRef.current.focus()
      }
  }),[inputRef])
  return <input ref={inputRef}/>
})

const ForwardRefDemo = () => {
  const inputRef = useRef()
  const test = () => {
    // console.log(inputRef);
    inputRef.current.focus()
  }
  return(
    <div>
    forwardRef
    {/*点击聚焦按钮,子组件input输入框聚焦*/}
    <Sinput ref={inputRef}/>
    <button onClick={e => test()}>聚焦</button>
    </div>
  )
}

export default function UseImperativeHandle() {
  return (
    <div>
      <h2>useImperativeHandle</h2>
      {/*forwardRef*/}
      <ForwardRefDemo />
    </div>
  )
}
