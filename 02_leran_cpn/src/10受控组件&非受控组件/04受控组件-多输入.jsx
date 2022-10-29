import React, { PureComponent } from 'react'

// 多个输入
export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleSubmit(e) {
    // 阻止默认表单提交事件
    e.preventDefault()
    console.log(e);
  }
  handleChange(e) {
    console.log(e.target.id);
    this.setState({ [e.target.id]:e.target.value})
  }
  render() {
    return (
      <div>
      {/*自己处理表单提交事件*/}
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='username'>
            用户名:
            <input 
              id='username'
              onChange={e =>this.handleChange(e)}
              value={this.state.username}
              ></input>
          </label>
          <label htmlFor='password'>
            密码:
            <input 
              id='password'
              onChange={e =>this.handleChange(e)}
              value={this.state.password}
              ></input>
          </label>
          
          <input type="submit" value="提交表单"></input>
        </form>
      </div>
    )
  }
}
