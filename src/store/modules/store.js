import apiStore from '../../api/store'
import * as types from '../mutation-types'

// initial state
const state = {
  info: {
    numNotReaded: 25,
    notReadedHistory: [],
    total: 1200,
    totalHistory: [],
    numMail: 200,
    numWeb: 1000
  },
  currentItems: [],
  currentItem: {}
}

// getters
const getters = {
  infoTotal: state => state.info.total,
  infoNumMail: state => state.info.numMail,
  infoNumWeb: state => state.info.numWeb,
  conditionParameters: state => state.info.conditionParameters,
  conditionOperators: state => state.info.conditionOperators
}

// actions
const actions = {
  queryStore ({ commit }, data) {
    apiStore.query(data, (dataFromServer) => {
      commit(types.SET_STORE_CURRENT_QUERY_RESULT, dataFromServer)
      commit(types.SET_STORE_CURRENT_START_INDEX, data.start || 0)
    })
  },
  getStoredItem ({ commit }, id) {
    apiStore.getIncident(id, (dataFromServer) => {
      commit(types.SET_STORE_CURRENT_ITEM, dataFromServer)
    })
  },
  getStoredInfo ({ commit }, id) {
    apiStore.getInfo(id, (dataFromServer) => {
      commit(types.SET_STORE_INFO, dataFromServer)
    })
  },
  removeItem ({ commit }, id) {
    apiStore.removeItem(id, (dataFromServer) => {
      commit(types.APPLY_REMOVE_ITEM, id)
    })
  }

}

// mutations
const mutations = {
  [types.SET_STORE_CURRENT_QUERY_RESULT] (state, dataFromServer) {
    state.currentItems = dataFromServer
  },
  [types.SET_STORE_SET_INFO] (state, dataFromServer) {
    state.info = dataFromServer
  },
  [types.SET_STORE_CURRENT_INCIDENT] (state, dataFromServer) {
    state.currentItem = dataFromServer
  },
  [types.SET_STORE_CURRENT_START_INDEX] (state, dataFromServer) {
    state.currentIncidentsStart = dataFromServer
  },
  [types.APPLY_REMOVE_ITEM] (state, id) {
    const index = state.currentItems.items.findIndex(item => item._id === id)
    if (index !== -1) {
      state.currentItems.items.splice(index, 1)
      if (state.currentItem._id === id) {
        state.currentItem = state.currentItems.items[index] // %%TEMP
      }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
