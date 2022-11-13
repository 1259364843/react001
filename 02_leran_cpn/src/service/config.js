// axios封装配置文件
const devBaseURL = "http://httpbin.org"
const proBaseURL = "http://httpbin.org"

// 通过node环境判断
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
// 配置超时时间
export const TIME_OUT = 5000;