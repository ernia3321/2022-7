<template>
  <div id="app">
    <!-- 使用组件 -->
    <MyCom></MyCom>
    <my-com></my-com>
    <my-com />
    <my-com />
    <my-com />
  </div>
</template>

<script>
// 引入组件
import MyCom from './components/MyCom.vue'

export default {
  name: 'App',
  // 注册组件
  components: {
    MyCom
  }
}
</script>

<style>
</style>
