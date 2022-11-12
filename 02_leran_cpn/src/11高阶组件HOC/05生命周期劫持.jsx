import React, { PureComponent } from 'react'

// 计算组件渲染时间
function getRenderTime(Component) {
  return class NewComponent extends PureComponent{
      render() {
          return (
              <div>
                  <Component {...this.props} />
              </div>
          )
      }
  }
}

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  UNSAFE_componentWillMount() {
    this.beginTime = Date.now()
  }
  render() {
    return (
      <h2>Home组件</h2>
    )
  }
  componentDidMount(){
    this.endTime = Date.now()
    const interval = this.endTime - this.beginTime
    console.log(`Home渲染时间:${interval}`,);
  }
}
class About extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <h2>About组件</h2>
    )
  }
}
const TimeHome = getRenderTime(Home)
export default class App extends PureComponent {
  render() {
    return (
      <div>
        高阶组件应用-生命周期
        <hr />
        <TimeHome />
        <hr />
        <About />
      </div>
    )
  }
}
