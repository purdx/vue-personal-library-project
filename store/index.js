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
  REMOVE_TOKEN(state) {
    state.accessToken = null
    localStorage.removeItem('accessToken')
    this.$router.push('/login')
  },
  SET_USERNAME(state, userName) {
    state.userName = userName
  },
  SET_EMAIL(state, email) {
    state.email = email
  }
}
