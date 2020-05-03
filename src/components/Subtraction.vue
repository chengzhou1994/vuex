<template>
  <div>
    <h3>当前最新的count值为：{{count}}</h3>
    <h3>{{ this.$store.getters.showNum}}</h3>
    <h3>{{showNum}}</h3>
    <button @click="sub">-1</button>
    <button @click="subN(3)">-N</button>
    <button @click="subAsync">-1 Async</button>
    <button @click="subNAsync(6)">-N Async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    // 通过刚才导入的 mapMutations 函数，将需要的 mutations 函数，映射为当前组件的methods方法,可以直接调用：
    ...mapMutations(["sub", "subN"]),

    ...mapActions(["subAsync", "subNAsync"])
  },
  // 当前组件需要的全局数据，映射为当前组件的computed计算属性：
  computed: {
    // 访问state中的数据
    ...mapState(["count"]),
    ...mapGetters(["showNum"])
  }
};
</script>

<style>
</style>
