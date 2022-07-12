// 这个文件是一个配置文件 主要的目的是对外暴露一个对象
// 这个对象通过键值对来规定webpak的配置选项

// webpack的运行是依赖 Node 环境的
// node遵循commonjs规范
// 所以webpack也遵循了commonjs规范
// 而commonjs规范中规定了暴露模块的方式是 module.exports
// 所以webpack对外暴露模块的方式是 module.exports

// 借助node内置的模块 帮我们拼接绝对路径
const path = require('path')
// 引入打包html插件
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // 项目的入口文件
  entry: './src/index.js',
  // 输出配置
  output: {
    // 输出的路径 => 要求使用的是绝对路径
    // __dirname: 当前文件(webpack.config.js)的绝对路径 D:\Education\2108A\webpack\03-webpack-config
    path: path.resolve(__dirname, 'bulid'),
    // 输出的文件名
    filename: 'js/bundle.js',
  },
  // 模块 => loader的配置
  module: {
    // 规则
    rules: [
      // {
      //   // 通过正则匹配所有，css结尾的文件
      //   test:/\.css$/,
      //   use:['style-loader','css-loader']
      // },
      {
        // 以.less结尾或者.css结尾的文件
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          // 写成对象的形式
          {
            loader: 'postcss-loader',
            // 加载插件 autoprefixer 添加后缀
            // options: {
            //   postcssOptions: {
            //     plugins: [require('autoprefixer')],
            //   },
            // },
          },
          'less-loader',
        ],
      },
      // 处理图片
      {
        test: /\.(jpg?g|png|gif|webp|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            // 自定义图片名字 1-sdgds.jpg
            name: 'imgs/[name]-[hash:5].[ext]',
            limit: 20 * 1024,
          },
          type: 'javascript/auto',
        },
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              name: 'imgs/[name]-[hash:5].[ext]',
              // 表示20kb以内图片转成base64位编码
              limit: 20 * 1024,
            },
          },
        ],
        type:'javascript/auto'
      },
    ],
  },
  // 插件
  plugins: [
    new htmlWebpackPlugin({
      // 需求：需要有结构的html文件
      // 指定html模板的位置，根据模板生成打包后的index.html
      template: './src/index.html',
      title: '欢迎来到百度',
    }),
  ],
}
