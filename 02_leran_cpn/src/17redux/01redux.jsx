import React, { PureComponent } from 'react'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
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
