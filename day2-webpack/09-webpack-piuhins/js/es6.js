// // 引入@babel/polyfill
// import "@babel/polyfill"

const num = 10
console.log(num);
[1,2,3,4].map((item) => {
    console.log(item);
})

// promise
new Promise = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve('ok')
    },2000)
}).then((data) => {
    console.log(data);
})