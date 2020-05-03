import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 创建store数据源，提供唯一公共数据

  // 组件访问 State 中数据第一种方式：
  // this.$store.state.全局数据名称
  // this可以不写,直接$store.state.全局数据名称

  // 组件访问 State 中数据的第二种方式：
  // 1. 从 vuex 中按需导入函数
  // import { mapState、mapGetter、mapMutation、mapAction } from 'vuex'
  // 通过刚才导入的 mapState 函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性：
  // 2. 将全局数据，映射为当前组件的计算属性
  // computed: {
  //   ...mapState(['count'])
  // }

  //  state 中存放的就是全局共享的数据源

  state: {
    count: 0
  },
  // 定义 Mutation
  // 只有Mutation中的函数才有权力修改state中的数据
  mutations: {
    //  修改state中的数据，推荐在Mutation用于变更Store中的数据。
    //  ①只能通过mutation中函数变更Store 数据，不可以直接操作Store中的数据。
    //  ②通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。

    /**
     * 触发mutations的第一种方式this.$store.commit()，
     * 触发mutations的第二种方式：
     * 1. 从 vuex中按需导入mapMutations函数
     *  import { mapMutations } from 'vuex'
     *  通过刚才导入的 mapMutations 函数，将需要的 mutations 函数，映射为当前组件的 methods 方法：
     * 2. 将指定的 mutations 函数，映射为当前组件的 methods 函数
     *  methods: {
     *  ...mapMutations(['add', 'addN'])
     * },
     */

    // 不能在Mutation中写异步的代码 如setTimeout
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
  // Action 专门用于处理异步任务。
  // 如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，
  // action并不能直接修改state中的数据
  // 但是在 Action 中还是要通过触发 Mutation 的方式间接变更数据。

  // 第一步：定义actions
  actions: {

    // this.$store.dispatch() 是触发 actions 的第一种方式，触发 actions 的第二种方式：
    // 1. 从 vuex 中按需导入 mapActions 函数
    //    import { mapActions } from 'vuex'
    // 通过刚才导入的 mapActions 函数，将需要的 actions 函数，映射为当前组件的 methods 方法：
    // 2. 将指定的 actions 函数，映射为当前组件的 methods 函数 列入@click="addASync"
    // methods: {
    //   ...mapActions(['addASync', 'addNASync'])
    // }

    addAsync(context) {
      setTimeout(() => {
        // 在action中，不能直接修改state中的数据
        // 必须通过context.commit()触发某个Mutation中的方法
        // commit触发一个Mutation中的方法
        context.commit("add");
      }, 1000);
    },

    addNAsync(context, step) {
      setTimeout(() => {
        context.commit("addN", step);
      }, 1000);
    },

    subAsync(context) {
      setTimeout(() => {
        context.commit("sub");
      }, 1000);
    },

    subNAsync(context, step) {
      setTimeout(() => {
        context.commit("subN", step);
      }, 1000);
    }

  },
  // Getter 用于对 Store 中的数据进行加工处理包装形成新的数据。
  // ① Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似 Vue 的计算属性,不会对原store数据修改
  // ② Store中数据发生变化，Getter 的数据也会跟着变化。

  //   使用 getters 的第一种方式：
  //   this.$store.getters.名称
  //   使用 getters 的第二种方式：
  //   import { mapGetters } from 'vuex'

  // computed: {
  //   ...mapGetters(['showNum'])
  // }
  getters: {
    showNum: state => {
      return '当前最新的数量是【' + state.count + '】';
    }

  },

  modules: {}
});
