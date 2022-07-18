const path = require('path')

// 引入打包html的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
// 引入清理build文件夹的插件 并解构
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 引入DefinePlugin 该插件直接从webpack中解构即可 无需单独安装
const { DefinePlugin } = require('webpack')
// 引入拷贝资源的模块
const copyWebpackPlugin = require('copy-webpack-plugin')

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
      // 处理html中的图片 ???
      // {
      //   test: /\.(html|htm)$/,
      //   // 处理html文件的img图片(负责引入img, 从而能被url-loader进行处理)
      //   loader: 'html-loader'
      // }
    ]
  },
  // 插件
  plugins: [
    // htmlWebpackPlugin是一个构造函数 可以通过new关键字实例化
    new htmlWebpackPlugin({
      template: './public/index.html',
      title: '我的小卖部'
    }),
    // 使用清理build文件夹的插件
    new CleanWebpackPlugin(),
    new DefinePlugin({
      // 定义ejs模板引擎中的 BASE_URL => 指定网站ico图标的
      BASE_URL: '"./"'
    }),
    new copyWebpackPlugin({
      // 匹配
      patterns: [
        {
          // 从哪里复制
          from: './public',
          globOptions: {
            // 需要忽略哪些文件
            ignore: [
              '**/index.html'
            ]
          }
        }
      ]
    })
  ]
}