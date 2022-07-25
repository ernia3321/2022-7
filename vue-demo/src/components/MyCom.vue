<template>
  <div id="app"> 
    <h3 @click='show'>{{msg}}</h3>
  </div>
</template>

<script>
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
#app {
  background-color: skyblue;
}
</style>