<template>
  <div>
    <!-- <h3>当前最新的count值为：{{this.$store.state.count}}</h3> -->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+N</button>
    <button @click="btnHandler3">+1 Async</button>
    <button @click="btnHandler4">+N Async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    btnHandler1() {
      // 在组件中实现自增+1操作，这种操作方法不正确，不合法
      // vuex中不允许组件直接修改store中的数据
      // this.$store.state.count++;

      // 触发 mutations 的第一种方式
      this.$store.commit("add");
    },
    // 可以在触发 mutations 时传递参数
    btnHandler2() {
      // commit 的作用，就是调用某个mutations中的函数，并可以传参数
      this.$store.commit("addN", 3);
    },
    // 异步地让count自增加1
    btnHandler3() {
      // 第二步：调用action中方法
      // 有2种方法触发action中方法
      // this.$store.dispatch() 是触发 actions 的第一种方式
      // 第二种方法
      //  1. 从 vuex 中按需导入 mapActions 函数
      // import { mapActions } from 'vuex'
      // 通过刚才导入的 mapActions 函数，将需要的 actions 函数，映射为当前组件的 methods 方法：
      // 2. 将指定的 actions 函数，映射为当前组件的 methods 函数
      // methods: {
      //   ...mapActions(['addASync', 'addNASync'])
      // }

      // 这里的dispatch函数，专门触发action中的异步方法
      this.$store.dispatch("addAsync");
    },
    // 异步地让count自增加5
    btnHandler4() {
      this.$store.dispatch("addNAsync", 5);
    }
  }
};
</script>

<style>
</style>
