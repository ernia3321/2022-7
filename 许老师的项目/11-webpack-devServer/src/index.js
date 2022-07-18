// 入口文件

import './css/style.css';

// 引入less资源
import './less/style.less';

// 引入图片 => 让webpack把这个当作静态资源 形成关系依赖树状图
import imgUrl from './imgs/1.jpg';

// 引入es6语法的js文件
import '@/js/es6';

// 引入axios
// import axios from 'axios'
// axios.get('http://localhost:8080/api/getBookList').then(
//   (resonpse) => {
//     let { data } = resonpse
//     console.log(data)
//   },
//   (err) => {
//     console.log('请求失败, 原因:' + err)
//   }
// )


// 背景图
// eslint-disable-next-line
const box = document.createElement('div');
box.className = 'box';
// eslint-disable-next-line
document.body.appendChild(box);

// 通过src属性设置图片 => 通过html标签引入图片
// 1、创建图片对象
// eslint-disable-next-line
const img = new Image();
// 2、设置src属性
// 这种写法只是把src的值当作一个普通的字符串而不是静态资源 所以不会打包该资源
// img.src = './imgs/1.jpg'
img.src = imgUrl;
// 3、追加到页面
// eslint-disable-next-line
document.body.appendChild(img);

// 如果开启了热更新
if (module.hot) {
  // 设置支持热更新的模块
  // accept: 同意 支持
  // eslint-disable-next-line
  module.hot.accept('./js/es6.js', () => {
    // eslint-disable-next-line
    console.log('检测到更新了~');
  });
}
