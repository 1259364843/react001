
import React, { Component } from 'react'

// Header
function Header() {
    return(
        <h2>头部</h2>
    )
}

// Main
function Main() {
    return(
        <div>
        <h2>主体</h2>
        <List />
        </div>
    )
}
// List
function List() {
    return(
        <ul>
            <li>11111</li>
            <li>12222</li>
            <li>13333</li>
            <li>144444</li>
            <li>15555</li>
            <li>166666</li>
            <li>177777</li>
        </ul>
    )
}

// Footer
function Footer() {
    return(
        <h2>页脚</h2>
    )
}
export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <hr/>
                <Main />
                <hr/>
                <Footer />
            </div>
        )
    }
}

