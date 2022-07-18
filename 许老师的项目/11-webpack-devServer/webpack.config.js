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
// 引入提取css的插件
const miniCssExtractPlugin = require('mini-css-extract-plugin')
// 引入css压缩插件
const optimizeCss = require('optimize-css-assets-webpack-plugin')

module.exports = {
  // 目标环境
  target: 'web',
  mode: 'production',
  // watch: true,
  // 源码映射
  devtool: 'source-map',
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
          // "style-loader",
          // 不希望通过插入style标签的方式写入css
          // 而是通过link方式引入提取的css
          miniCssExtractPlugin.loader,
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
      title: '我的小卖部',
      //压缩 html代码
      minify: {
        //移除空格
        collapseWhitespace: true,
        //移除注释
        removeComments: true,
        // 移除空元素
        removeEmptyElements: true,
      }
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
    // new ESLintPlugin({
    //   fix: true
    // }),
    // 使用提取css的插件
    new miniCssExtractPlugin({
      //对输出的 css文件进行重命名
      filename: 'css/built.css'
    }),
    // 使用css压缩插件
    new optimizeCss()
  ],
  // 配置本地服务器
  devServer: {
    // 自动打开浏览器
    // open: true,
    // 设置端口号
    port: 8080,
    // 开启热模替换
    // hot: true,
    // 主机
    // host: '0.0.0.0',
    // 开启gzip压缩
    // compress: true,
    // 配置代理服务器
    proxy: {
      '/api': {
        // http://localhost:8080/api/getBookList
        // http://localhost:3000/getBookList
        target: 'http://localhost:3000',
        // secure: false,// 这是签名认证，http和https区分的参数设置
        // ws: true,
        // 改变源
        changeOrigin: true,
        // 路径重写
        pathRewrite: {
          '^/api': ''
        },
      }
    }
  },
  resolve: {
    // 自定义拓展名
    extensions: ['.wasm', '.mjs', '.js', '.json', '.vue', 'jsx', 'ts'],
    // 别名
    alias: {
      '@': path.resolve('./src')
    }
  }
}