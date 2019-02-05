export default function({ $axios, store, redirect }) {
  $axios.onRequest(config => {
    config.headers.common.Accept = 'application/json'
    config.headers.common.Authorization = `Bearer ${store.state.accessToken}`
  })

  $axios.onError(error => {
    const code = error.response.status
    // if unauthenticated
    if (code === 401) {
      store.commit('REMOVE_USER')
    }
    const errorObj = { message: error.response.data.message, type: 'warning' }
    store.dispatch('handleNotif', errorObj)
  })
}
