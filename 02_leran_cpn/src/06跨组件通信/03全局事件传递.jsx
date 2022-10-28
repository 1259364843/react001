import React, { PureComponent } from 'react'
import { EventEmitter } from 'events'
// 创建事件总线对象
const eventBus = new EventEmitter();
// 跨组件事件传递
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    }
  }
  componentDidMount() {
    // 添加事件监听
    eventBus.addListener('click', this.handleClick)
  }
  componentWillUnmount() {
    // 取消事件监听
    eventBus.removeListener('click', this.handleClick)
  }
  // 多个形参接受
  handleClick(arg1,arg2) {
    console.log(arg1,arg2);
    alert('监听到Profile组件的点击')
  }
  render() {
    return (
    <div>
      Home
      
    </div>
    )
  }
}
class Profile extends React.PureComponent {
  emitEvent() {
    // 发送事件
    // 1.eventName
    // 2.可变参数
    eventBus.emit("click","你好呀","123")
  }
  render() {
    return (
    <div>
      Profile
      <button onClick={e => this.emitEvent()}>点击按钮</button>
    </div>
    )
  }
}
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <hr />
        <Profile />
      </div>
    )
  }
}
