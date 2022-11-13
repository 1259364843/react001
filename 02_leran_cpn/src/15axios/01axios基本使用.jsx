import React, { PureComponent } from 'react'

// axios
import axios from "axios";
export default class App extends PureComponent {
  // 在生命周期中发送网络请求
  componentDidMount() {

    // 创建实例
    const a1 = axios.create({
      baseURL: 'http://httpbin.org/get',
      timeout: 5000,
      headers: {}
    })
    // 1.发送 GET 请求
    axios({
      method: "get",
      url: "http://httpbin.org/get",
      params: {
        name: "zs",
        age: 20,
      },
    }).then((res) => {
      console.log(res);
    });
    // 2.发送 POST 请求
    axios({
      method: "post",
      url: "http://httpbin.org/post",
      data: {
        firstName: "Fred",
        lastName: "Flintstone",
      },
    }).then((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        <h1>axios网络请求</h1>
      </div>
    )
  }
}
