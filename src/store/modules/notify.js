const state = {
  notifys: {
    isNotify: false,
    message: '',
    status: ''
  }
}

const mutations = {
  START_NOTIFY(state) {
    state.notifys.isNotify = true
  },
  STOP_NOTIFY(state) {
    state.notifys.isNotify = false
  },
  ADD_NOTIFY(state, data) {
    state.notifys = data
  }
}

const actions = {
  queryNotify({
    commit
  }, form) {
    commit('START_NOTIFY')
    try {
      commit('ADD_NOTIFY', form)
      return true
    } catch (error) {
      return error
    } finally {
      setTimeout(() => {
        commit('STOP_NOTIFY')
      }, 3000)
    }
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}