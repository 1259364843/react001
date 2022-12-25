import React, { PureComponent } from 'react'

import { connect } from "../connect.js";
import {decrement,subAction} from '../store/actionCreators.js'
 function About2(props) {
  return (
    <div>
      <h1>减法</h1>
      <h2>当前计数:{props.counter}</h2>
      <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subAction(5)}>-5</button>
      <hr />
      </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProp = dispatch => {
  return {
    // 减一
    decrement: function () {
      dispatch(decrement())
    },
    // 减去num
    subAction: function (num) {
      dispatch(subAction(num))
    }
  }
}
const About = connect(mapStateToProps, mapDispatchToProp)(About2)
export default About
