import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './tabControl/tabControl.css';

// import App from './App';
// import App from './01组件的定义方式/类组件.jsx';
// import App from './01组件的定义方式/函数式组件.jsx';
// import App from './01组件的定义方式/render函数的返回值.jsx';
// import App from './03组件间通信/01组件间的嵌套.jsx';
// import App from './03组件间通信/02类组件-父传子通信.jsx';
// import App from './03组件间通信/05子传父.jsx';
// import App from './tabControl/App.jsx';
// import App from './06跨组件通信/02context.jsx';
// import App from './07setState的使用/App.jsx';
// import App from './08性能优化/组件嵌套的render调用.jsx';
// import App from './06跨组件通信/03全局事件传递.jsx';
// import App from './10受控组件&非受控组件/01ref使用.jsx';
// import App from './10受控组件&非受控组件/02受控组件的基本使用.jsx';
// import App from './10受控组件&非受控组件/03受控组件select的使用.jsx';
// import App from './10受控组件&非受控组件/04受控组件-多输入.jsx';
// import App from './11高阶组件HOC/01高阶组件的定义.jsx';
// import App from './11高阶组件HOC/03增强props.jsx';
// import App from './11高阶组件HOC/04应用鉴权.jsx';
// import App from './11高阶组件HOC/05生命周期劫持.jsx';
// import App from './12组件内容补充/01ref的转发.jsx';
// import App from './12组件内容补充/02portals使用.jsx';
// import App from './13样式/01内联样式.jsx';
// import App from './13样式/cssModules/app/index.jsx';
// import App from './13样式/style-component/app/index.jsx';
// import App from './14antd/index.jsx';
// import App from './14antd/classnames.jsx';
// import App from './14antd/antd.jsx';
// import App from './15axios/01axios基本使用.jsx';
// import App from './15axios/02拦截器.jsx';
// import App from './16动画/01CSSTransition.jsx';
// import App from './17redux/01redux.jsx';
// import App from './18router/app.jsx';
import App from './19Hook/App.jsx';

import store from './17redux/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App name="abc"/>
  </Provider>
    
);