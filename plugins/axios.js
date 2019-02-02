export default function({ $axios, store }) {
  $axios.onRequest(config => {
    config.headers.common.Accept = 'application/json'
    config.headers.common.Authorization = `Bearer ${store.state.accessToken}`
  })
}
