import policies from '../../api/policies'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  current: {}
}

// getters
const getters = {
  allPolicies: state => state.all,
  currentPolicy: state => state.current
}

// actions
const actions = {
  getAllPolicies ({ commit }) {
    policies.getAll(policies => {
      commit(types.SET_POLICIES, { policies })
    })
  },
  getPolicy ({ commit }, id) {
    policies.get(id, policy => {
      commit(types.SET_CURRENT_POLICY, { policy })
    })
  },
  removePolicy ({ commit }, id) {
    policies.remove(id, () => {
      this.getAllpolicies({ commit })
    })
  },
  setPolicy ({ commit }, data) {
    const serverData = Object.assign({}, data)
    serverData.condition = Object.assign({}, data.condition)

    if (serverData.condition.mask !== undefined) {
      serverData.condition.mask = serverData.condition.mask.map((mask) => mask.text)
    }

    policies.set(serverData, () => {
      this.getAllpolicies({ commit })
    })
  }

}

// mutations
const mutations = {
  [types.SET_POLICIES] (state, { policies }) {
    state.all = policies
  },
  [types.SET_CURRENT_POLICY] (state, { policy }) {
    if (policy.condition.mask !== undefined) {
      policy.condition.mask = policy.condition.mask.map((mask, index) => {
        return { text: mask, key: index}
      })
    }
    state.current = policy
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
