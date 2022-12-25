import React, { PureComponent } from 'react'
import Home from './pages/home5-saga.jsx'
import About from './pages/about3.jsx'
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>redux</h1>
        <Home />
        <About />
      </div>
    )
  }
}
