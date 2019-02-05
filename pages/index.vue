<template>
  <div class="home-page">
    <Header />
    <div class="container page-content">
      <BookList />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import BookList from '@/components/BookList'
export default {
  components: {
    Header,
    BookList
  },
  beforeCreate() {
    const url = this.$route.fullPath
    if (url.indexOf('/#access_token') !== -1) {
      const accessToken = url.match(/#(?:access_token)=([\S\s]*?)&/)[1]
      this.$store.commit('SET_TOKEN', accessToken)
      this.$axios(process.env.USER_API)
        .then(response => {
          this.$store.commit('SET_USERNAME', response.data.data.name)
          this.$store.commit('SET_EMAIL', response.data.data.email)
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
