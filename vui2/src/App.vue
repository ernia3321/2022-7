<template>
  <div id="app">
    <h3 id="title">App根组件 {{ msg }} </h3>
    <h3 >{{ msg }} </h3>
    <!-- <button @click='getGoodsList'>点我啊</button> -->
    <ul v-for="item in goodsList" :key="item.id">
      <li>
        商品名字: {{item.goods_name}}
      </li>
      <li>
        商品图片: <img :src="item.goods_img" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // 存放商品列表数据
      goodsList: [],
      msg: '哈哈哈~'
    }
  },
  methods: {
    async getGoodsList() {
      const { data } = await this.$http.get('https://www.escook.cn/api/cart')
      if (data.status == 200) {
        // 保存数据 => 渲染
        this.goodsList = data.list
      } else {
        alert('获取数据失败 请稍候重试 ~')
      }
    }
  },
  beforeCreate() {
    // console.log(this)
    // debugger;
  },
  created() {
    // console.log(this)
    // debugger;
    // this.getGoodsList()
  },
  beforeMount() {
    // console.log(this)
    // debugger
  },
  // dom挂载完毕 
  mounted() {
    // console.log(this.$el)
    debugger
    // this.getGoodsList()
  },

  // #region
  // watch: {
  //   goodsList: {
  //     async handler() {
  //       const { data } = await this.$http.get('https://www.escook.cn/api/cart')
  //       if (data.status == 200) {
  //         // 保存数据 => 渲染
  //         this.goodsList = data.list
  //       } else {
  //         alert('获取数据失败 请稍候重试 ~')
  //       }
  //     },
  //     // 页面一渲染就执行watch中的函数回调
  //     immediate: true
  //   }
  // }
  // #endregion
}
</script>

<style>
img {
  vertical-align: top;
}
ul {
  border: 2px solid gray;
  list-style: none;
}
li {
  margin-bottom: 20px;
}
</style>
