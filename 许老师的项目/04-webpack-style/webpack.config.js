const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'bulid/js'),
    filename: 'bundle.js'
  },
  // 模块 => loader的配置
  // 这种方式可以更好的表示loader的配置，也方便后期的维护，同时也让你对各个Loader有一个全局的概览
  module: {
    // 规则
    // module.rules中允许我们配置多个loader（因为我们也会继续使用其他的loader，来完成其他文件的加载）
    // rules属性对应的值是一个数组 数组中存放的是一个个的Rule，Rule是一个对象，对象中可以设置多个属性
    rules: [
      // 处理css的配置
      // {
      //   // 通过正则匹配所有.css结尾的文件
      //   // 正则中的\是一个转义符
      //   // $以.css结尾
      //   test: /\.css$/,
      //   // use: 使用xxx处理器来处理test匹配到的文件
      //   // use 数组中 loader 执行顺序：从右到左，从下到上 依次执行 => pop

      //   // 单个loader
      //   // loader: 'css-loader'

      //   // 多个loader
      //   use: [
      //      // 创建 style 标签，将 js 中的样式资源插入进行，添加到 head 中生效
      //     'style-loader',
      //     // 将 css 文件变成 commonjs 模块加载 js 中，里面内容是样式字符串
      //     'css-loader',
      //   ],

      //   // loader需要配置
      //   // use: [
      //   //   {loader: 'css-loader', options: {}}
      //   // ]
      // },
      // 处理less的配置
      {
        // 以.less结尾或者.css结尾的文件
        test: /\.(less|css)$/,
        use: [
          "style-loader",
          "css-loader",
          // 写成对象的形式 postcss依赖其它插件
          {
            loader: 'postcss-loader',
            // 配置
            // options: {
            //   // postcss配置项
            //   postcssOptions: {
            //     // 加载插件 autoprefixer 添加前缀
            //     plugins: [
            //       require('autoprefixer')
            //     ]
            //   },
            //   // 可能会存在其它配置项
            //   // xxxOptions: {}
            // }
          },
          "less-loader"
        ]
      }
    ]
  }
}