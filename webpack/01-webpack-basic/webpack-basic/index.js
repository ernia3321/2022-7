// 项目入口文件

// 引入jquery
import $ from 'jquery'
// 项目在上线的时候尽量优化代码的体积 所以我们选择压缩后的jquery
// import $ from './node_modules/jquery/dist/jquery.min.js'
import './css/index.less'

$(document).click(()=>{
  console.log('hello webpack')
})