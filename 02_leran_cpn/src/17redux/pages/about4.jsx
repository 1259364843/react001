import React from 'react'

//  拆分reducer
import { connect } from "react-redux";
import {decrement,subAction} from '../store/actionCreators.js'
 function About2(props) {
  // console.log(props);
  return (
    <div>
      <h1>减法</h1>
      <h2>当前计数:{props.counter}</h2>
      <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subAction(5)}>-5</button>
      <hr />
      <h1>banner</h1>
      <ul>
        {
          props.banners.map((item,index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      <h1>recommends</h1>
      <ul>
        {
          props.recommends.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counterInfo.counter,
    banners: state.homeInfo.banners,
    recommends: state.homeInfo.recommends
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
