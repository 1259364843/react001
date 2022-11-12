import React, { PureComponent } from 'react'
import ReactDom from 'react-dom'
class Modal extends PureComponent{
    render() {
        return ReactDom.createPortal(
            // 子组件
            this.props.children,
            document.getElementById("modal")
        )
    }
}
class Home extends PureComponent{
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        )
    }
}

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home />
                <Modal>
                    <h2>Modal</h2>
                </Modal>
                <button>按钮</button>
            </div>
        )
    }
}