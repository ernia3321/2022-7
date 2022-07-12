// 入口文件

// 引入css资源
// 内联方式
// import '.css-loader!./css/style.css'
import "../css/style.css";
// import '../css/style.less'

// 1、创建元素
let dv = document.createElement("div");
// 2、设置元素的class属性值
dv.className = "title";
// 3、设置元素内容
dv.innerHTML = "本是无意穿堂风 偏偏孤倨引山洪";
// 4、将元素追加到body中
document.body.appendChild(dv);
