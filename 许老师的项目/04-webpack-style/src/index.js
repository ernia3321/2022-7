// 入口文件

// 引入css资源
// 内联方式
// import 'css-loader!../css/style.css'
import '../css/style.css'

// 引入less资源
import '../less/style.less'

// 1、创建元素
let dv = document.createElement('div')
// 2、设置元素的class属性值
dv.className = 'title'
// 3、设置元素内容
dv.innerHTML = '本是无意穿堂风 偏偏孤倨引山洪'
// 4、将元素追加到body中 
// => document.body = null 可能是因为script引入顺序导致的
document.body.appendChild(dv)

// ========== less ============
// 1、创建元素
let dv2 = document.createElement('div')
// 2、设置元素的class属性值
dv2.className = 'dv'
// 3、设置元素内容
dv2.innerHTML = '山鸟与鱼不同路 从此山水不相逢'
// 4、将元素追加到body中 
document.body.appendChild(dv2)