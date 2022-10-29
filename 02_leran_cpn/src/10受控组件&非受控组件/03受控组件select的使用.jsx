import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      // 默认值为cd
      city: 'cd'
    }
  }
  handleSubmit(e) {
    // 阻止默认表单提交事件
    e.preventDefault()
    console.log(e);
  }
  handleChange(e) {
    this.setState({ city:e.target.value})
  }
  render() {
    return (
      <div>
      {/*自己处理表单提交事件*/}
        <form onSubmit={e => this.handleSubmit(e)}>
          <select 
            value={this.state.city}
            name="city"
            onChange={e => this.handleChange(e)}>
            <option value="bj">北京</option>
            <option value="sh">上海</option>
            <option value="gz">广州</option>
            <option value="sz">深圳</option>
            <option value="cd">成都</option>
          </select>
          <input type="submit" value="提交表单"></input>
        </form>
      </div>
    )
  }
}
