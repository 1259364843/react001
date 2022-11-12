const CracoLessPlugin = require('craco-less');
const path = require('path')
// 拿到当前路径,拼接传递的dir
const resolve = dir => path.resolve(__dirname,dir)
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 更改主题色
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve('src')
    }
  }
};