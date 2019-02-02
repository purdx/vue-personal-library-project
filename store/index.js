export const state = () => ({
  accessToken: localStorage.getItem('accessToken'),
  userName: localStorage.getItem('userName'),
  email: localStorage.getItem('email')
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
