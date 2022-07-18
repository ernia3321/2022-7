// 引入 @babel/polyfill
// import '@babel/polyfill'

const num = 10;
console.log(num);
// eslint-disable-next-line
[1, 2, 3, 4].map((item) => {
  console.log(item);
});

// promise
new Promise((resolve) => {
  setTimeout(() => {
    resolve('ok');
  }, 2000);
}).then((data) => {
  console.log(data);
});
