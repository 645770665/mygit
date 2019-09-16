import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state:{
    count:11101
  },
  actions: {
    //调接口
    awaitcount(store){
      store.state.count++
      // let demo = store.state.count
      console.log(store.state.count,"1 actions");
      store.commit('updatacount',store.state.count)
    }
  },
  mutations: {
    updatacount(state,val){
      state.count=val
      state.count++
      // console.log(state.count,"2 mutations");
    }
  },
  getters:{
    // 计算属性  ----  getters
    dddddd(state){
      return state.count
    }
  }
})