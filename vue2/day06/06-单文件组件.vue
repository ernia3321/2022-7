<template>
<!-- 结构 -->
  <div id="app"> 
    <h3 @click='show'>{{msg}}</h3>
  </div>
</template>

<script>
// 逻辑
// 哪里需要使用此组件 就通过import导入即可
// export default => import xx from './06-单文件组件.vue'
// export => import {xx} from './06-单文件组件.vue'
export default {
  data(){
    return {
      msg: '待到山花烂漫时'
    }
  },
  methods: {
    show(){
      console.log('她在丛中笑')
    }
  },
}
</script>

<style>
/* 样式 */
#app {
  background-color: skyblue;
}
</style>