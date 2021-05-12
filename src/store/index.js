import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    setLogin: function (state) {
      return state.isLogin = true;
    },
    setLogout: (state) => {
      return state.isLogin = false;
    }
  },
  actions: {

  },
  modules: {
  }
})
