import Vue from 'vue'

export default {
  getAll (cb) {
    /* cb([{
      id: 'vnkfjbngkzf',
      type: 'email/imap4',
      enabled: false,
      server: 'imap.mail.ru',
      port: 993,
      tls: true,
      user: 'nikulin_m_v@mail.ru',
      pass: 'zse45rdx',
      shedule: '*//* 5 * * * *',
      title: 'Get eMail by IMAP4'
    }])*/
    Vue.http.get('/api/connections/get-all').then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  },
  get (id, cb) {
    Vue.http.get('/api/connections/get?id=' + id).then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  },
  set (data, cb) {
    Vue.http.post('/api/connections/set?id=' + data.id, data).then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  },
  remove (id, cb) {
    Vue.http.post('/api/connections/remove?id=' + id).then(response => {
      cb(response.body)
    }, response => {
      // error callback
    })
  }
}
