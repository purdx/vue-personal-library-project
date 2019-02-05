export const state = () => ({
  accessToken: localStorage.getItem('accessToken'),
  userName: localStorage.getItem('userName'),
  email: localStorage.getItem('email'),
  notifs: []
})

export const getters = {
  isLoggedIn(state) {
    return !!state.accessToken
  }
}

export const mutations = {
  SET_TOKEN(state, accessToken) {
    localStorage.setItem('accessToken', accessToken)
    state.accessToken = accessToken
  },
  REMOVE_USER(state) {
    localStorage.clear()
    Object.keys(state).forEach(prop => (state[prop] = null))
  },
  SET_USERNAME(state, userName) {
    localStorage.setItem('userName', userName)
    state.userName = userName
  },
  SET_EMAIL(state, email) {
    localStorage.setItem('email', email)
    state.email = email
  },
  PUSH_NOTIF(state, obj) {
    state.notifs.push(obj)
  },
  REMOVE_FIRST_NOTIF(state) {
    state.notifs.shift()
  },
  REMOVE_NOTIF(state, index) {
    state.notifs.splice(index, 1)
  }
}
export const actions = {
  handleNotif(context, obj) {
    context.commit('PUSH_NOTIF', obj)
    setTimeout(() => {
      context.commit('REMOVE_FIRST_NOTIF')
    }, 4000)
  }
}
