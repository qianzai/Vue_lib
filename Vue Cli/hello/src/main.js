// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//在页面中引入了vue.js
import App from './App'//引入根组件App.vue
import router from './router'//引入路由

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({   //vue的全局实例
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
