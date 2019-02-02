<template>
  <div class="home-page">
    <Header />
    <section class="container" />
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  },
  beforeCreate() {
    const url = this.$route.fullPath
    if (url.indexOf('/#access_token') !== -1) {
      const accessToken = url.match(/#(?:access_token)=([\S\s]*?)&/)[1]
      localStorage.setItem('accessToken', accessToken)
      this.$store.commit('SET_TOKEN', accessToken)
      this.$axios('http://localhost:3000/api/user')
        .then(response => {
          this.$store.commit('SET_USERNAME', response.data.data.name)
          localStorage.setItem('userName', response.data.data.name)
          this.$store.commit('SET_EMAIL', response.data.data.email)
          localStorage.setItem('email', response.data.data.email)
        })
        .catch(response => {
          alert(response)
        })
    }
  }
}
</script>

<style>
</style>
