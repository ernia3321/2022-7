// 入口文件

// es6 module导入
import getSum from '../js/getSum.js'
let liu = getSum(10,20)
console.log(liu);
// commonjs导入
let sayHi = require('../js/sayHi')
sayHi()
