import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // 创建store数据源，提供唯一公共数据

  // 组件访问 State 中数据第一种方式：
  // this.$store.state.全局数据名称
  // this可以不写直接$store.state.全局数据名称

  // 组件访问 State 中数据的第二种方式：
  // 1. 从 vuex 中按需导入函数
  // import { mapState、mapGetter、mapMutation、mapAction } from 'vuex'
  // 通过刚才导入的 mapState 函数，将当前组件需要的全局数据，映射为当前组件的 computed 计算属性：
  // 2. 将全局数据，映射为当前组件的计算属性
  // computed: {
  //   ...mapState(['count'])
  // }

  //  state 中存放的就是全局共享的数据源

  state: {
    count: 0
  },
  // 定义 Mutation
  mutations: {
    // 修改state中的数据，推荐在Mutation用于变更Store中的数据。
    //  ①只能通过mutation中函数变更Store 数据，不可以直接操作Store中的数据。
    //  ②通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。

    /**
     * // this.$store.commit() 是触发mutations的第一种方式，触发mutations的第二种方式：
     * 1. 从 vuex中按需导入mapMutations函数
     *  import { mapMutations } from 'vuex'
     *  通过刚才导入的 mapMutations 函数，将需要的 mutations 函数，映射为当前组件的 methods 方法：
     * 2. 将指定的 mutations 函数，映射为当前组件的 methods 函数
     *  methods: {
     *  ...mapMutations(['add', 'addN'])
     * },
     */
    add(state) {
      // 变更状态
      state.count++;
    },
    addN(state, step) {
      // 变更状态
      state.count += step;
    },
    sub(state) {
      state.count--;
    },
    subN(state, step) {
      state.count -= step;
    }

  },
  actions: {
  },
  modules: {
  }
});
