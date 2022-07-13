const path = require('path')

// 引入打包html的插件
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'bulid'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          "style-loader",
          "css-loader",
          'postcss-loader',
          "less-loader"
        ]
      }
    ]
  },
  // 插件
  plugins: [
    // 默认会创建一个空的 HTML，自动引入打包输出的所有资源(JS/CSS...)
    new htmlWebpackPlugin({
      // 需求：需要有结构的 HTML文件
      // template指定html模板的位置 根据模板生成打包后的index.html
      template: './src/index.html',
      title: 'myApp'
    })
  ]
}