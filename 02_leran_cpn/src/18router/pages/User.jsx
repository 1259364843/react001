import React, { PureComponent } from 'react'
import {Navigate} from 'react-router-dom'
export default class User extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      // 是否登录
      isLogin: true
    }
  }
  render() {
    return this.state.isLogin?(
      <div>
        用户界面
      </div>
    ):<Navigate to="/login" />
  }
}
