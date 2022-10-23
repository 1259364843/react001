import React, { Component } from 'react'

/**
 * 通过属性传递
 */
// 子组件

function Cpn(props) {
  const { name }= props
  return (
    <div>
      {name}
    </div>
  )
}


export default function App() {
  return (
    <div>
      父组件
      <hr />
      <Cpn name='父组件传递的值'/>
    </div>
  )
}

