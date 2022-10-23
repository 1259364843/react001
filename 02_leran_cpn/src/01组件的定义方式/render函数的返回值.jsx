import { Component } from "react";

// 类组件
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }
  render() {
    return (
      // 可以返回数组
      [
        <h1>123</h1>,
        <h1>123</h1>
      ]
    )
  }
}

