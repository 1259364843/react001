import React, { PureComponent } from 'react'

// axios
import axios from "axios";
export default class App extends PureComponent {
  // 在生命周期中发送网络请求
  componentDidMount() {
    axios.interceptors.request.use(response=>{
      console.log(response);
      // 必须return
      return response
    },error=>{})
    axios.get("http://httpbin.org/get",{
      params: {
        name: "zs",
        age: 20,
      },
    }).then((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        <h1>axios拦截器</h1>
      </div>
    )
  }
}
