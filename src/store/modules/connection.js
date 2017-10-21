import agents from '../../api/connection'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  current: {}
}

// getters
const getters = {
  allConnection: state => state.all,
  currentConnection: state => state.current
}

// actions
const actions = {
  getAllConnections ({ commit }) {
    agents.getAll(connections => {
      commit(types.SET_CONNECTIONS, { connections })
    })
  },
  getConnection ({ commit }, id) {
    agents.get(id, connection => {
      commit(types.SET_CURRENT_CONNECTION, { connection })
    })
  },
  removeConnection ({ commit }, id) {
    agents.remove(id, () => {
      this.getAllConnections({ commit })
    })
  },
  setConnection ({ commit }, data) {
    agents.set(data, () => {
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
