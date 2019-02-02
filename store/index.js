export const state = () => ({
  accessToken: localStorage.getItem('accessToken'),
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
  }
}
