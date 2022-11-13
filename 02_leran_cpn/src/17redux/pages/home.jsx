import React, { PureComponent } from 'react'

import store from "../store/index.js";
// action
import {addAction} from '../store/actionCreators.js'
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // 从state中取值
      counter: store.getState().counter,
    }
  }
  // 加一
  increment() {
    store.dispatch(addAction(1))
  }
  render() {
    return (
      <div>
      
      <h1>Home</h1>
      <h2>当前计数:{this.state.counter}</h2>
      <button onClick={e => this.increment()}>+1</button>
      <hr />
      </div>
    )
  }
  componentDidMount() {
     store.subscribe(() => {
        this.setState({
          counter: store.getState().counter
        })
    })
  }
componentWillUnmount() {
    this.unsubscribe()
}
}
