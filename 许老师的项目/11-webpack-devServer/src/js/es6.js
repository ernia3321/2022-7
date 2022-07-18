// 引入 @babel/polyfill
// import '@babel/polyfill'

const num = 10;
// eslint-disable-next-line
console.log(num);
// eslint-disable-next-line
[1, 2, 3, 4, 5, 88866].map((item) => {
  // eslint-disable-next-line
  console.log(item);
});

// promise
new Promise((resolve) => {
  setTimeout(() => {
    resolve('ok');
  }, 2000);
}).then((data) => {
  // eslint-disable-next-line
  console.log(data);
});

// memory-fileSystem

// eslint-disable-next-line
console.log(222);
// eslint-disable-next-line
console.log(6666)