import React, {PureComponent} from 'react';
import {
	BrowserRouter,
	Route,
	Link,
	Routes,
	HashRouter,
  NavLink,
  useNavigate
} from "react-router-dom";


function Test() {
  return (
    <div>
      测试
    </div>
  )
}

function Join() {
  return (
    <div>
      加入我们.TEL111111111
    </div>
  )
}

function About(props) {
  return (
    <div>
      <h2>About</h2>
      <NavLink to="/about/loop">你好</NavLink>
      <Routes>
          <Route path="/about/loop" element={<Test />} />
          <Route path="/about/join" element={<Join />} />
      </Routes>
      <button onClick={e => this.toJoin()}>联系我们</button>
    </div>
  );
}


class About1 extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
      <h2>About</h2>
      <NavLink to="/about/loop">你好</NavLink>
      <Routes>
          <Route path="/about/loop" element={<Test />} />
          <Route path="/about/join" element={<Join />} />
      </Routes>
      <button onClick={e => this.toJoin()}>联系我们</button>
    </div>
    )
  }
}

// export default About;
export default About1;
