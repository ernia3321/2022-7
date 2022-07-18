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
      // 处理样式
      {
        test: /\.(less|css)$/,
        use: [
          "style-loader",
          "css-loader",
          'postcss-loader',
          "less-loader"
        ]
      },
      // 处理图片
      {
        test: /\.(jpe?g|png|gif|webp|svg)$/i,
        // 如果不需要转base64
        // type: 'asset/resource',
        // generator: {
        //   filename: 'imgs/[name]-[hash:5].[ext]'
        // }

        // 如果需要转base64
        type: 'asset',
        generator: {
          filename: 'imgs/[name]-[hash:5].[ext]',
        },
        // parser: 解析
        parser: {
          // dataUrlCondition: 条件
          dataUrlCondition: {
            // maxSize: 20kb以内的图片转成base64位
            maxSize: 20 * 1024
          }
        }
      },
      // 处理html中的图片
      {
        test: /\.(html|htm)$/,
        // 处理html文件的img图片(负责引入img, 从而能被url-loader进行处理)
        loader: 'html-loader'
      }
    ]
  },
  // 插件
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      title: 'myApp'
    })
  ]
}