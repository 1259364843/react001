import React, { Component } from 'react'

// 创建context对象
const UserContext = React.createContext({
  name: 'aa',
  age: 18
})

// 1.类组件使用
class Hed extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log(this.context);
    return (
      <div>
        <h2>{this.context.name}</h2>
        <h2>{this.context.age}</h2>
      </div>
    )
  }
}
// 设置组件的context
Hed.contextType = UserContext


// 2.函数式组件使用

function Hedf() {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <div>
            <h2>{value.name}</h2>
            <h2>{value.age}</h2>
            </div>
          )
        }
      }
    </UserContext.Consumer>
  )
}

function Pro(props) {
  return (
    <div>
       {/*类组件*/}
      <Hed name={props.name} age={props.age}/>
      {/*函数式组件*/}
      <Hedf name={props.name} age={props.age}/>
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
    return (
      <div>
      {/*包裹子组件,通过value传值*/}
        <UserContext.Provider value={this.state}>
          <Pro/>
        </UserContext.Provider>
      </div>
    )
  }
}
