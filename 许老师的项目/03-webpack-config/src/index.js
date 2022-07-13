// 入口文件

// es6 module 导入
import getSum from '../js/getSum.js'
let sum = getSum(10, 20)
console.log(sum)

// commonjs 导入
let sayHi = require('../js/sayHi.js')
sayHi()