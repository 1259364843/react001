import React, { Component } from 'react'

// 子组件

class Cpn extends Component {
  render() {
    // 父组件传递的函数
    const {increment} = this.props
    return (
      <div>
        子组件
        <button onClick={increment}>+1</button>
      </div>
    )
  }
}


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increment(){
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    const {count} = this.state
    return (
      <div>
        父组件
        {count}
        <hr />
        <Cpn increment={e => this.increment()}/>
      </div>
    )
  }
}
