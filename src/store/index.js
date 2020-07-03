import Vue from "vue";
import Vuex from 'vuex'

import authentication from './modules/authentication'
import notify from './modules/notify'

Vue.use(Vuex);

const Store = () => {
  return new Vuex.Store({
    modules: {
      authentication,
      notify
    }
  })
}

export default Store