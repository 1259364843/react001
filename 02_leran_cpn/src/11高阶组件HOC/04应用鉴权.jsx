import React, { PureComponent } from 'react'


// 高阶组件-页面鉴权
// 登录成功展示购物车界面
// 未登录展示登录页面

function withAuth(Cpn) {
  return props => {
    const {isLogin} = props
    if (isLogin) {
      return <Cpn {...props}/>
    } else {
      return <LoginPage />
    }
    
  }
}
class LoginPage extends PureComponent {
  render() {
    return (
      <div>
        <h2>未登录-登录界面</h2>
      </div>
    )
  }
}
class CarPage extends PureComponent {
  render() {
    return (
      <div>
        <h2>购物车界面</h2>
      </div>
    )
  }
}

const AuthCarPage = withAuth(CarPage)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>登录鉴权</h2>
        <hr />
        <AuthCarPage isLogin={false}/>
        <AuthCarPage isLogin={true}/>
      </div>
    )
  }
}
