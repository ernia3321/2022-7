// webpack的运行是依赖node
// node循环commonjs规范
// 所以webpack也遵循了comonjs的规范
// 而commonjs规范中规定了暴露模块的方式是module.exprots
// 所以webpack对外暴露模块的方式是module.exprots



// 借助node内置的模块 帮我们拼接绝对路径
const path = require("path")
module.exports = {
    mode:'development',
    // 项目的入口文件
    entry: './src/index.js',
    // 输出配置
    output: {
        // 输出的路径 => 要求使用的是绝对路径
        // __dirname: 当前文件(webpack.config.js)的绝对路径E:\VScode\2022.7\2022-7\day2\03-webpack-config
        path: path.resolve(__dirname,'bulid/js'),
        // 输出的文件名
        filename: 'bundle.js'
    }
}