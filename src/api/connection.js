import Vue from 'vue'

export default {
  getAll (cb) {
    Vue.http.get('/api/connection/get-all').then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  },
  get (id, cb) {
    Vue.http.get('/api/connection/get?id=' + id).then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  },
  set (data, cb) {
    Vue.http.post('/api/connection/set?id=' + data.id, data).then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  },
  remove (id, cb) {
    Vue.http.post('/api/connection/remove?id=' + id).then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  }
}
