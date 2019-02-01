export default function({ store, route, redirect }) {
  if (route.fullPath === '/login') return
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
