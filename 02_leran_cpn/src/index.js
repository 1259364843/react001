import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
import App from './06跨组件通信/03全局事件传递.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);