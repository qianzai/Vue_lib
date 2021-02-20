<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>  //显示路由
  </div>
</template>

<script>
export default {  //暴露当前组件对象
  name: 'App',
  data() {
    return { }
  },
  methods: { },
  components: { }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
