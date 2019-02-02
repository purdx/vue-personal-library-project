export const state = () => ({
  accessToken: null,
  userName: null,
  email: null
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
  REMOVE_USER(state) {
    Object.keys(state).forEach(prop => (state[prop] = null))
  },
  SET_USERNAME(state, userName) {
    state.userName = userName
  },
  SET_EMAIL(state, email) {
    state.email = email
  }
}
