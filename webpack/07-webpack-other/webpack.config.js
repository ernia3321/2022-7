const path = require('path')

// 引入打包html的插件
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "bulid"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      // 处理样式
      {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      // 处理图片
      {
        test: /\.(jpe?g|png|gif|webp|svg)$/i,
        // use: {
        //   loader: 'file-loader',
        //   options: {
        //     // 默认使用 ES6 模块解析，将其关闭，启用 CommonJS 模块，不配置这个，html 文件中的图片路径不对
        //     esModule: false,
        //     // 自定义图片名字 1-5636b.jpg
        //     // outputPath: 'imgs'
        //     name: 'imgs/[name]-[hash:5].[ext]',
        //   }
        // },
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              // [name]: 原文件的文件名
              // [hash:5]: MD4散列算法得到的hash值取5位
              // [ext]: 原文件的后缀名
              name: "imgs/[name]-[hash:5].[ext]",
              // 表示20kb以内的图片转成base64位编码
              limit: 20 * 1024,
            },
          },
        ],
        // webpack5中使用 file-loader
        type: "javascript/auto",
      },
      // 处理html中的图片
      {
        test: /\.(html|htm)$/,
        // 处理html文件的img图片(负责引入img, 从而能被url-loader进行处理)
        loader: "html-loader",
      },
      // 处理其他资源 => 字体图标
      {
        exclude: /\.(css|js|html|less)/,
        loader: "file-loader",
        options: {
          name: "fonts/[name]-[hash:3].[ext]",
        },
        type: "javascript/auto",
      },
    ],
  },
  // 插件
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      title: "myApp",
    }),
  ],
};