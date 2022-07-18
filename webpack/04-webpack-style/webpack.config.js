// webpack的运行是依赖node
// node循环commonjs规范
// 所以webpack也遵循了comonjs的规范
// 而commonjs规范中规定了暴露模块的方式是module.exprots
// 所以webpack对外暴露模块的方式是module.exprots

// 借助node内置的模块 帮我们拼接绝对路径
const { options } = require("less");
const path = require("path");
module.exports = {
  mode: "development",
  // 项目的入口文件
  entry: "./src/index.js",
  // 输出配置
  output: {
    // 输出的路径 => 要求使用的是绝对路径
    // __dirname: 当前文件(webpack.config.js)的绝对路径E:\VScode\2022.7\2022-7\day2\03-webpack-config
    path: path.resolve(__dirname, "build/js"),
    // 输出的文件名
    filename: "bundle.js",
  },
  // 模块 => loader的配置
  // 这种方式可以更好的表示loader的配置，也方便后期的维护，同时也让你对各个Loader有一个全局的概念
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
};
