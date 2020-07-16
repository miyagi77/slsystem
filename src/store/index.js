import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//dispatch：异步操作，写法： this.$store.dispatch('mutations方法名',值)
//commit：同步操作，写法：this.$store.commit('mutations方法名',值)

export default new Vuex.Store({
  state: {
    l: {
      map: ''
    }
  }, //vuex的基本数据，用来存储变量
  getters: {

  }, //从基本数据(state)派生的数据，相当于state的计算属性
  mutations: {
    increment(state, n) {
      state.l.map = n;
    }
  }, //提交更新数据的方法，必须是同步的(如果需要异步使用action)。每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
  //回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数，提交载荷作为第二个参数。
  actions: {

  }, //和mutation的功能大致相同，不同之处在于 ==》1. Action 提交的是 mutation，而不是直接变更状态。 2. Action 可以包含任意异步操作。
  modules: {

  } //模块化vuex，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。
})