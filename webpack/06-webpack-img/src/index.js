// 入口文件

// 内联方式
// import 'css-loader!../css/style.css'

import '../css/style.css'

// let dv = document.createElement('div')
// dv.className='title'
// dv.innerHTML='所以在安装webpack时，我们需要同时安装webpack-cli（第三方的脚手架事实上是没有使用webpack-cli的，而是类似于自 己的 vue-service-cli 的东西）'
// document.body.appendChild(dv)

// =========less=========
import '../less/style.less'

// let dv2 = document.createElement('div')
// dv2.className='dv'
// dv2.innerHTML='我可以另外我们发现代码中依然存在ES6的语法，比如箭头函数、const等，这是因为默认情况下webpack并不清楚我们打包后的文 件是否需要转成ES5之前的语法，后续我们需要通过babel来进行转换和设置；'
// document.body.appendChild(dv2)

// ========img=======
let box = document.createElement('div')
box.className='box'
document.body.appendChild(box)