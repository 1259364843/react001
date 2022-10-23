import React, { Component } from 'react'

import TabControl from './TabControl';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTitle: '最新',
      titles: [
        '最新',
        '最热',
        '精选',
      ]
    }}
  render() {
    const {curTitle} = this.state
    // 标题
    const { titles } = this.state;
    return (
      <div>
        <TabControl itemClick={index => this.itemClick(index)} titles={titles}/>
          <h2>{curTitle}</h2>
      </div>
    )
  }
  itemClick(index) {
    console.log(index);
    this.setState({
      curTitle: this.state.titles[index]
    })
  }
}
