import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import settings from './modules/settings'
import connection from './modules/connection'
import view from './modules/view'
import createLogger from './plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    settings,
    view,
    connection
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
