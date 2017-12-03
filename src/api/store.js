import Vue from 'vue'

export default {
  query (data, cb) {
    Vue.http.post('/api/store/get-items', data).then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  },
  getInfo (cb) {
    Vue.http.get('/api/store/get-info').then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  },
  getIncident (id, cb) {
    Vue.http.get('/api/store/get-item?id=' + id).then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  },
  getNumItems (data, cb) {
    Vue.http.post('/api/store/get-num-items', data).then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  },

  removeItem (id, cb) {
    Vue.http.post('/api/store/remove-item?id=' + id).then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  }
}
