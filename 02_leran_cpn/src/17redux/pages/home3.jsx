import React, { PureComponent } from 'react'
// 3.redux库中的connect函数
import {connect} from 'react-redux'
// action
import {increment,addAction, changeBannersAction, changeRecommendsAction} from '../store/actionCreators.js'
import axios from 'axios'
class Home2 extends PureComponent {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata"
    }).then(res => {
      console.log(res);
      const data = res.data.data
      console.log("轮播图",data.banner);
      this.props.changeBanners(data.banner.list)
      this.props.changeRecommends(data.recommend.list)
    })
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
    },
    // 改变轮播图
    changeBanners(banners) {
      // 派发action
      dispatch(changeBannersAction(banners))
    },
    changeRecommends(recommends) {
      dispatch(changeRecommendsAction(recommends))
    }
  }
}
const Home = connect(mapStateToProps, mapDispatchToProp)(Home2)

export default Home