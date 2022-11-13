import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group';
export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
  }
  render() {
    const {isShow} = this.state
    return (
      <div>
      <button onClick={e => this.setState({isShow: !isShow})}>显示/隐藏</button>
      <CSSTransition
      in={isShow}
      timeout={300}
      unmountOnExit
      classNames="alert"
      >
        <h1>CSSTransition</h1>
      </CSSTransition>
      </div>
    )
  }
}
