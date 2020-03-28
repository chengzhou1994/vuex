<template>
  <div>
    <my-addition></my-addition>

    <p>----------------------------------------</p>

    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from "./components/Addition";
import Subtraction from "./components/Subtraction";
export default {
  data() {
    return {};
  },
  // 注册一下为app的组件
  components: {
    // 改个别名 ，连字符
    "my-addition": Addition,
    "my-subtraction": Subtraction
  }
};
</script>

<style>
</style>
