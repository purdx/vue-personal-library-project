export default function({ store, route, redirect }) {
  const url = route.fullPath
  // if (url.indexOf('/#access_token') !== -1) {
  // const accessToken = url.match(/#(?:access_token)=([\S\s]*?)&/)[1]
  // }
  if (route.path === '/login' && store.getters.isLoggedIn) {
    return redirect('/')
  }
  if (route.path === '/login' || url.indexOf('/#access_token') !== -1) return

  if (!store.getters.isLoggedIn) {
    return redirect('/login')
  }
}
