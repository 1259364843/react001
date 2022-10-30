import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        HOC{this.props.name}
      </div>
    )
  }
}

// 类组件写法

// 1.传入一个组件
function enhanceComponentC(Wrapped) {
  // 2.返回一个组件
   class NewCpn extends PureComponent{
    render() {
      return <Wrapped {...this.props}/>
    }
  }
  NewCpn.displayName = 'hhhh'
  return NewCpn
}

// 函数式组件写法
// 1.传入一个组件
function enhanceComponentF(Wrapped) {
  // 2.返回一个组件
   function NewCpn(props) {
    return <Wrapped {...props}/>
   }
  NewCpn.displayName = 'hhhh'
  return NewCpn
}

// 调用函数
const EnhanceComponent = enhanceComponentF(App)

export default EnhanceComponent
