<template>
  <div>
    <h3>当前最新的count值为：{{$store.state.count}}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+N</button>
    <!-- <h3>{{$store.getters.showNum}}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+N</button>
    <button @click="btnHandler3">+1 Async</button>
    <button @click="btnHandler4">+N Async</button>-->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    btnHandler1() {
      // 在组件中实现自增+1操作，这种操作不正确，不合法
      // this.$store.state.count++;
      // 触发 mutations 的第一种方式
      this.$store.commit("add");
    },
    // 可以在触发 mutations 时传递参数
    btnHandler2() {
      // commit 的作用，就是调用某个mutations函数，并可以传参数
      this.$store.commit("addN", 3);
    }
  }
};
</script>

<style>
</style>
