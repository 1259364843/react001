import { React, PureComponent } from "react";

import store from "./store/index";
// 把需要的store和dispatch传入
export function connect(mapStateToProps, mapDispatchToProp) {
  // 返回一个高阶组件
  return function enhanceHOC(WrappedComponent) {
    // 返回一个类组件
    return class extends PureComponent {
      constructor(props) {
        super(props);
        this.state = {
            // 依赖的状态
          storeState: mapStateToProps(store.getState()),
        };
      }
      componentDidMount() {
        //   监听改变
        this.unsubscribe = store.subscribe(() => {
            // 当状态改变重新赋值
          this.setState({
            storeState: mapStateToProps(store.getState()),
          });
        });
      }
      componentWillUnmount() {
        //   取消订阅
        this.unsubscribe();
      }
      render() {
        return (
          <WrappedComponent
            // 传入自己的props参数
            {...this.props}
            // 传入store
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProp(store.dispatch)}
          />
        );
      }
    };
  };
}