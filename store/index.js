export const state = () => ({
  accessToken: null,
  authenticated: false
})

export const getters = {
  isLoggedIn(state) {
    return !!state.accessToken
  }
}

export const mutations = {
  SET_TOKEN(state, accessToken) {
    state.accessToken = accessToken
  },
  REMOVE_TOKEN(state) {
    state.accessToken = null
    localStorage.removeItem('accessToken')
    this.$router.push('/login')
  }
}
