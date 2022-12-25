import React, { PureComponent } from 'react'

import {connect} from '../connect.js'
// action
import {increment,addAction} from '../store/actionCreators.js'
class Home2 extends PureComponent {
  render() {
    return (
      <div>
      <h1>Home</h1>
      <h2>当前计数:{this.props.counter}</h2>
      <button onClick={e => this.props.increment()}>+1</button>
      <button onClick={e => this.props.addAction(5)}>+5</button>
      <hr />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProp = dispatch => {
  return {
    // 加一
    increment: function() {
      dispatch(increment())
    },
    // 加num
    addAction: function(num) {
      dispatch(addAction(num))
    }
  }
}
const Home = connect(mapStateToProps, mapDispatchToProp)(Home2)

export default Home