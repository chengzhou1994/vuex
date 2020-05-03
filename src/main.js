import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  // 将创建的共享数据对象，挂载到 Vue 实例中
  // 所有的组件，就可以直接从 store 中获取全局的数据了
  store,
  render: h => h(App)
}).$mount('#app');
