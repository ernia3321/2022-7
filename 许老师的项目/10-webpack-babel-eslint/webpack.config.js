const path = require('path')

// 引入打包html的插件
const htmlWebpackPlugin = require('html-webpack-plugin')
// 引入清理build文件夹的插件 并解构
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 引入DefinePlugin 该插件直接从webpack中解构即可 无需单独安装
const { DefinePlugin } = require('webpack')
// 引入拷贝资源的模块
const copyWebpackPlugin = require('copy-webpack-plugin')
// 引入eslint插件
const ESLintPlugin = require('eslint-webpack-plugin');

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
      // 处理js => 使用babel
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader'
      // }

      // 处理js => 使用core-js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // 排除node_modules包
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", {
              // 按需加载
              useBuiltIns: 'usage',
              // 指定corejs的版本
              corejs: {
                version: 3
              },
              // 指定兼容到具体浏览器的版本
              targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      }
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
    }),
    // 使用eslint插件
    new ESLintPlugin({
      // 自动修复
      fix: true
    })
  ]
}