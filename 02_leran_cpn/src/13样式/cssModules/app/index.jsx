import React, { PureComponent } from 'react'

import Home from '../home/index'
import Profile from '../profile/index'

// 引入样式
import appStyle from './style.module.css'
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appStyle.title}>app</h2>
        <Home />
        <Profile />
      </div>
    )
  }
}
