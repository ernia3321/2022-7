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
      // 处理其它资源 => 字体图标
      // {
      //   //排除 css/js/html资源
      //   exclude: /\.(css|js|html|less)$/,
      //   loader: 'file-loader',
      //   options: {
      //     esModule: false,
      //     name: 'fonts/[hash:10].[ext]'
      //   },
      //   type: 'javascript/auto'
      // },

      // webpack5
      {
        test: /\.(woff2?|eot|ttf)$/,
        // type: 类型
        // asset/resource: 替换之前的file-loader
        type: 'asset/resource',
        // generator: 生成
        generator: {
          // filename: 文件名
          filename: 'fonts/[name].[ext]'
        }
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