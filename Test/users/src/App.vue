<template>
  <div>
		<a href="#/home">主页</a>
		<a href="#/user">用户管理</a>
		<a href="#/student">学生管理</a>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer
 from './components/Footer.vue'
export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style>

</style>
