import React, { PureComponent } from 'react'

// 子组件Home
class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h2>Home:{`姓名:${this.props.name},年龄:${this.props.age}`}</h2>
        {this.props.sex}
      </div>
    )
  }
}

// 增强组件
const EnhaceHome = enhanceProps(Home)
// 父组件App
class App extends PureComponent {
  render() {
    return (
      <div>
        HOC{this.props.name}
        <hr />
        {/*传入一些属性*/}
        <EnhaceHome name="张三" age={20}/>
      </div>
    )
  }
}

// 定义一个高阶组件
// 1.传入一个组件Wrapped
function enhanceProps(Wrapped) {
  // 2.返回一个组件
   return props => {
    // 新增一个属性sex
    return <Wrapped {...props} sex="男"/>
   }
}


// 调用函数
// const EnhanceComponent = enhanceComponentC(App)

export default App
