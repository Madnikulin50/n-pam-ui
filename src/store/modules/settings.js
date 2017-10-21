import apiStore from '../../api/store'
import * as types from '../mutation-types'

// initial state
const state = {
  store: {}
}

// getters
const getters = {
  settings: state => state.data
}

// actions
const actions = {
  getStoreSettings ({ commit }) {
    apiStore.getStore(dataFromServer => {
      commit(types.SET_STORE_SETTINGS, { dataFromServer })
    })
  },
  setStoreSettings ({ commit }, data) {
    apiStore.setStore(data, dataFromServer => {
    })
  }
}

// mutations
const mutations = {
  [types.SET_STORE_SETTINGS] (state, dataFromServer) {
    state.settings.store = dataFromServer
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
