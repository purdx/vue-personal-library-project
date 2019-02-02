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
    }
  }
}
</script>

<style>
</style>
