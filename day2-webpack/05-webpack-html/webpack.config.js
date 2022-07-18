
const { options } = require("less");
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");
const { plugins } = require("../04-webpack-style/postcss.config");
module.exports = {
  mode: "development",
  // 项目的入口文件
  entry: "./src/index.js",
  // 输出配置
  output: {
    path: path.resolve(__dirname, "build/js"),
    filename: "bundle.js",
  },
  module: {
    // 规则
    // module.rules中允许我们配置多个loader（因为我们也会继续使用其他的loader，来完成其它文件的加载）
    // rules属性对应的值是一个数组 数组中存放的是一个个的Rule，Rule是一个对象，对象中可以设置多个属性
    rules: [
      // 处理css的配置
      {
        // 通过正则匹配虽有.css结尾的文件
        // 正则中的\是转义符
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // 处理less的配置
      {
        // 以.less结尾或者.css结尾的文件
        test: /\.(less|css)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            //配置
            options: {
              // postcss配置项
              postcssOptions: {
                // 加载插件 autoprefixer添加前缀
                plugins: [require("autoprefixer")],
              },
              // 可能会存在其他配置项
              // xxxOptions: {}
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    // 默认会创建一个空的HTML，自动引入打包输出的所有资源(JS/CSS...)
    new htmlWebpackPlugin({
      // 需求：需要有结构的HTML文件
      // template指定html模板的位置 根据模板生成打包后的index.html
      template: './src/index.html',
      title: 'myApp'
    })
  ]
};
// 插件

