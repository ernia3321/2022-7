// 入口文件

import "../js/es6.js"


















// 1、创建图片对象
// eslint-disable-next-line
const img = new Image();
// 2、设置src属性
// 这种写法只是把src的值当做一个普通的字符串而不是静态资源 所以不
// img.src = './imgs/1.jpg'
img.src = imgUrl;
// 3、追加到页面
// eslint-disable-next-line
document.body.appendChild(img);

// 如果开启了热更新
if　(module.hot) {
    // 设置支持热更新的模块
    // accept：同意 支持
    // eslint-disable-next-line
    module.hot.accept('../js/es6.js', () => {
      // eslint-disable-next-line
      console.log("检测到更新了~");
    })
}