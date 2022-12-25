import { React, PureComponent } from "react";

import { storeContext } from './context'

// 把需要的store和dispatch传入
export function connect(mapStateToProps, mapDispatchToProp) {
  // 返回一个高阶组件
  return function enhanceHOC(WrappedComponent) {
    // 返回一个类组件
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props, context);
        this.state = {
            // 依赖的状态
          storeState: mapStateToProps(context.getState()),
        };
      }
      componentDidMount() {
        //   监听改变
        this.unsubscribe = this.context.subscribe(() => {
            // 当状态改变重新赋值
          this.setState({
            storeState: mapStateToProps(this.context.getState()),
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
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProp(this.context.dispatch)}
          />
        );
      }
    };
    // 拿到共享的value
    EnhanceComponent.contextType = storeContext
    return EnhanceComponent;
  };
}