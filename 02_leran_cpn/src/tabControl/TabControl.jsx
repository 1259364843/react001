import React, { Component } from 'react'

export default class TabControl extends Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      curIndex: 0
    }
  }
  // 点击事件处理方法
  itemClick(index){
    this.setState({
      curIndex: index
    })
    // 父组件传递的事件
    const {itemClick} = this.props
    // 执行
    itemClick(index)
  }
  render() {
    const {titles} = this.props
    const {curIndex}  = this.state
    return (
      <div className="tab-control">
        {
          titles.map((item,index) => {
            return (
              <div
              key={index}
              className={"tab-item " +(index ===curIndex? "active": "")}
              onClick={e=>this.itemClick(index)}
              >
              <span>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}
