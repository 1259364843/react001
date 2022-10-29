import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }
  handleSubmit(e) {
    // 阻止默认表单提交事件
    e.preventDefault()
    console.log(e);
  }
  handleChange(e) {
    this.setState({ username:e.target.value})
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
          <input type="submit" value="提交表单"></input>
        </form>
      </div>
    )
  }
}
