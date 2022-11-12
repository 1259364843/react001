import React, { createRef, PureComponent, forwardRef } from 'react'

// 子组件
class Home extends PureComponent{
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        )
    }
}


// 函数组件
// 把ref最终指向h2标签,本来应该是整个div
const Profile = forwardRef(function (props, ref) {
    console.log(props.name);
    return (
        <div>
            <h2 ref={ref}>Profile</h2>
        </div>
    )
})

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.titleRef = createRef()
        this.homeRef = createRef()
        this.profileRef = createRef()
    }
    render() {
        return (
            <div>
                <h2 ref={this.titleRef}>Hello</h2>
                <Home ref={this.homeRef} />
                <Profile name={"名字"} ref={this.profileRef} />
                <button onClick={e => this.printRef()}>打印ref</button>
            </div>
        )
    }
    printRef() {
        console.log(this.titleRef.current);
        console.log(this.homeRef.current);
        console.log(this.profileRef);
    }
}
