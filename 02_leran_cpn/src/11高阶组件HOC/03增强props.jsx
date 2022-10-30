import React, { PureComponent, createContext } from 'react'
// 创建context
const UserContext = createContext({
  name: '张三',
  age: 20
})
// 定义高阶组件
function withUser(Cpn){
  return props => {
    return (
      <UserContext.Consumer>
      {
        user => {
          return (
            <Cpn {...props} {...user}/>
          )
        }
      }
    </UserContext.Consumer>
    )
  }
}


// 子组件Home
class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <h2>Home:{`姓名:${this.props.name},年龄:${this.props.age}`}</h2>
    )
  }
}

const UserHome = withUser(Home)

// 父组件App
class App extends PureComponent {
  render() {
    return (
      <div>
        HOC{this.props.name}
        <hr />
        <UserHome />
      </div>
    )
  }
}



export default App
