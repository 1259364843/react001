import React, { PureComponent } from 'react'

// 内联样式
export default class App extends PureComponent {
  render() {
    const pStyle ={
      fontSize: "30px",
      color: "blue"
    }
    return (
      <div>
        <h2 style={{"fontSize": "50px","color":"red"}}>内联样式1</h2>
        <h2 style={pStyle}>内联样式2</h2>
      </div>
    )
  }
}
