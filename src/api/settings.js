import Vue from 'vue'

export default {
  getStore (cb) {
    Vue.http.get('/api/settings/store/get').then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  },
  setStore (cb) {
    Vue.http.get('/api/settings/store/set').then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  }
}
