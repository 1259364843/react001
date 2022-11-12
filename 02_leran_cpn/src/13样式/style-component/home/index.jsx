import {React,PureComponent} from 'react';
// 样式
import {HomeWraper} from './style'
export default class Home extends PureComponent {
  render() {
    return (
      <HomeWraper>
      <div>
        <h2 className='title'>Home</h2>
        <div className='banner'>
          <span>轮播图1</span>
          <span>轮播图2</span>
          <span className='active'>轮播图3</span>
          <span>轮播图4</span>
        </div>
      </div>
      </HomeWraper>
      
    )
  }
}
