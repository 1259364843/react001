import React from "react";
import {
	BrowserRouter,
	Route,
	Link,
	Routes,
	HashRouter,
  NavLink
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
function App() {
	return (
		<div>
			<h1>react路由</h1>
			<hr />
			<div>
				<h5>browser模式</h5>
				<BrowserRouter>
					<Link to="/">首页</Link>
					<Link to="/about">关于</Link>
					<Routes>
						{/*Route用于路径匹配,exact精准匹配*/}
						<Route exact path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</BrowserRouter>
				<hr />
				<h5>hash模式</h5>
				<HashRouter>
					<Link to="/">首页</Link>
					<Link to="/about">关于</Link>
					<Routes>
						{/*Route用于路径匹配*/}
						<Route exact path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</HashRouter>
			</div>
      {/*NavLink*/}
      <div>
      <h5>NavLink</h5>
      <BrowserRouter>
        <NavLink to="/" activestyle={{color: "red"}}>首页</NavLink>
        <NavLink to="/about" activestyle={{color: "red"}}>关于</NavLink>
        <Routes>
          {/*Route用于路径匹配,exact精准匹配*/}
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      </div>
      
		</div>
	);
}

export default App;
