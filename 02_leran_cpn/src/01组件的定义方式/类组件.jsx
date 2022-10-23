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
      <div>
        类组件
      </div>
    )
  }
}