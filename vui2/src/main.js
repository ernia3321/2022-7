// 项目入口文件

// 引入vue => 仅运行时版本 => 不完整 缺少编译器 
import Vue from 'vue'

// 引入完整vue版本 => 带编译器的 => 帮助我们解析template
// import Vue from '../node_modules/vue/dist/vue.js'

// 引入App根组件 => 对所有组件进行统一的管理
import App from './App.vue'

// 引入axios
import axios from 'axios'
// 挂载到vue原型上 希望所有的组件实例都能访问到axios
Vue.prototype.$http = axios

// 关闭生产提示
Vue.config.productionTip = false

// eslint-disable-next-line
// let a = 10

new Vue({
  // el: '#app',
  // template: '<h3>App</h3>',

  // 通过vue自身源码中的方法去生成元素并渲染
  // render: (createElement)=> {
  //   // return createElement('h3', 'my app')
  //   return createElement(App)
  // }

  // 这种写法是上面的简写形式
  render: h => h(App),
}).$mount('#app')


// 关于不同版本的Vue：
// 	1.vue.js与vue.runtime.xxx.js的区别：
// 		(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
// 		(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
// 	2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容
