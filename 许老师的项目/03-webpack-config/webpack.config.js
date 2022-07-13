// 这个文件是一个配置文件 主要的目的是对外暴露一个对象
// 这个对象通过键值对来规定webpak的配置选项

// webpack的运行是依赖 Node 环境的
// node遵循commonjs规范
// 所以webpack也遵循了commonjs规范
// 而commonjs规范中规定了暴露模块的方式是 module.exports
// 所以webpack对外暴露模块的方式是 module.exports

// 借助node内置的模块 帮我们拼接绝对路径
const path = require('path')
module.exports = {
  mode: 'development',
  // 项目的入口文件
  entry: './src/index.js',
  // 输出配置
  output: {
    // 输出的路径 => 要求使用的是绝对路径
    // __dirname: 当前文件(webpack.config.js)的绝对路径 D:\Education\2108A\webpack\03-webpack-config
    path: path.resolve(__dirname, 'bulid/js'),
    // 输出的文件名
    filename: 'bundle.js'
  }
}