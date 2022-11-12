import React, { PureComponent } from 'react'

// antd
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
      antd
      <h2 className={"title " + (isActive? "active": "")}>class</h2>
      <h2 className={["title" + (isActive? "active": "")].join(" ")}>class</h2>
      </div>
    )
  }
}
