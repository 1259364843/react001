import React, { Component } from 'react'


function Hed(props) {
  const {name,age} = props
  return (
    <div>
      <ul>
        <h2>姓名:{name}</h2>
        <h2>年龄:{age}</h2>
      </ul>
    </div>
  )
}
function Pro(props) {
  return (
    <div>
       {/*通过props传递给其他组件*/}
      <Hed name={props.name} age={props.age}/>
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
      </ul>
    </div>
  )
}


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '张三',
      age: 22
    }
  }
  render() {
    const {name, age} = this.state
    return (
      <div>
        <Pro name={name} age={age}/>
      </div>
    )
  }
}
