import React, { PureComponent } from 'react'

import store from "../store/index.js";
import {decAction} from '../store/actionCreators.js'
export default class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // 从state中取值
      counter: store.getState().counter,
    }
  }
  decrement() {
    store.dispatch(decAction())
  }
  render() {
    return (
      <div>
      
      <h1>About</h1>
      <h2>当前计数:{this.state.counter}</h2>
      <button onClick={e => this.decrement()}>-1</button>
      <hr />
      </div>
    )
  }
  componentDidMount() {
    // 订阅变化
    this.unsubscribe = store.subscribe(() => {
       this.setState({
         counter: store.getState().counter
       })
   })
 }
 componentWillUnmount() {
  // 取消订阅
  this.unsubscribe()
}
}
