import { Component } from "react";

class Cpn extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }
  render() {
    return (
      <div>
      Cpn组件
      </div>
      )
  }
  // 卸载
  componentWillUnmount() {
    console.log('组件卸载');
  }
}
/**
 * 生命周期
 */
export default class App extends Component {
  constructor(props) {
    // 1.第一个执行
    console.log('1.constructor方法执行');
    super(props);
    this.state = {
      count: 0,
      isShow: true
    }
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  removeCpn() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    // 2.第二个执行
    console.log('2.render方法执行');
    return (
      <div>
      <h1>123</h1>
      <h2>{this.state.count}</h2>
      <button onClick={e => this.increment()}>+1</button>
      {/*使用子组件*/}
      <hr />
      <button onClick={e => this.removeCpn()}>Cpn组件</button>
      {this.state.isShow && <Cpn />}
      </div>
    )
  }
  // 挂载
  componentDidMount(){
    console.log('3.componentDidMount执行');
  }
  // 更新
  componentDidUpdate() {
    console.log('更新componentDidUpdate执行');
  }
}

