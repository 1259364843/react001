import React, { Component } from 'react'

/**
 * 通过属性传递
 */
// 子组件
class Cpn extends Component {
  constructor(props) {
    super(props)
    this.props= props
    this.state = {
      name: '子组件'
    }
  }
  render() {
    const {name} = this.props
    return (
      <div>
        <h1>子组件</h1>
        <h2>{name}</h2>
      </div>
    )
  }
}

// 父组件
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>类组件-父传子</h1>
        <hr />
        {/*子组件*/}
        <Cpn name='父组件传递的值'/>
      </div>
    )
  }
}
