import React, { PureComponent } from 'react'

// classnames库
import classNames from 'classnames'
export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isActive: true
    }
  }
  render() {
    const {isActive} = this.state
    return (
      <div>
      classnames
      <h2 className={classNames({
        "active": isActive,
        }, "title")}
      >标题</h2>
      </div>
    )
  }
}
