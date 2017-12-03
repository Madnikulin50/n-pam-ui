import api from '../../api/connection'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  current: {}
}

// getters
const getters = {
  allConnections: state => state.all,
  currentConnection: state => state.current
}

// actions
const actions = {
  getAllConnections ({ commit }) {
    api.getAll(connections => {
      commit(types.SET_CONNECTIONS, { connections })
    })
  },
  getConnection ({ commit }, id) {
    api.get(id, connection => {
      commit(types.SET_CURRENT_CONNECTION, { connection })
    })
  },
  removeConnection ({ commit }, id) {
    api.remove(id, () => {
      this.getAllConnections({ commit })
    })
  },
  setConnection ({ commit }, data) {
    api.set(data, () => {
      this.getAllConnections({ commit })
    })
  }

}

// mutations
const mutations = {
  [types.SET_CONNECTIONS] (state, { connections }) {
    state.all = connections
  },
  [types.SET_CURRENT_CONNECTION] (state, { connection }) {
    state.current = connection
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
