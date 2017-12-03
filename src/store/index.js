import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import settings from './modules/settings'
import connection from './modules/connection'
import store from './modules/store'
import createLogger from './plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  getters,
  modules: {
    settings,
    connection,
    store
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
