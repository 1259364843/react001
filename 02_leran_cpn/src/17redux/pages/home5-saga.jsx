import React, { PureComponent } from 'react'


// 5.redux-saga使用
import {connect} from 'react-redux'
// action
import {increment,addAction, fetchHomeMultidataAction} from '../store/actionCreators.js'
class Home2 extends PureComponent {
  componentDidMount() {
    // console.log(this.props);
    this.props.getHomeMultidata();
  }
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
    counter: state.counterInfo.counter
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
    },
    // 改变轮播图
    getHomeMultidata() {
      // dispatch不再传入对象,而是函数
      // 此函数会被主动调用
      dispatch(fetchHomeMultidataAction)
    }
  }
}
const Home = connect(mapStateToProps, mapDispatchToProp)(Home2)

export default Home