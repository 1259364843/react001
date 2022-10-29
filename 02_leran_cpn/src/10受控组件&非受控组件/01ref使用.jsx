import React, { PureComponent,createRef } from 'react'



class Counter extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState({
      count: this.state.count +1
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <hr />
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }
}


// 直接操作DOM
export default class App extends PureComponent {
  constructor(props) {
    super(props)
    // 创建ref
    this.titleRef = createRef()
    
    this.titleEl = null
    // 组件ref
    this.counterRef = createRef()
  }
  changeText() {
    console.log(this.titleRef);
    console.log(this.titleEl);
  }
  appBtnClick() {
    console.log('appBtnClick',this.counterRef);
    // 调用ref子组件的方法
    this.counterRef.current.increment()
  }
  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>hello1</h2>
        <h2 ref={arg => this.titleEl = arg}>hello2</h2>
        <hr />
        <button onClick={e => this.changeText()}>改变文本</button>
        <hr />
        <Counter ref={this.counterRef}/>
        <button onClick={e => this.appBtnClick()}>App按钮</button>
      </div>
    )
  }
}

