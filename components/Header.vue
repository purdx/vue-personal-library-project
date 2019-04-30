<template>
  <header>
    <nav class="container-fluid navbar navbar-expand-md navbar-dark bg-dark">
      <nuxt-link class="navbar-brand" to="/">
        Library Project
      </nuxt-link>
      <ul class="navbar-nav ml-auto">
        <li
          class="nav-item dropdown"
          :class="{ 'show': showDropdown}"
        >
          <a
            id="
          navbarDropdown"
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            :aria-expanded="showDropdown"
            @click="showDropdown = !showDropdown"
          >
            {{ $store.state.userName }}
          </a>
          <div class="dropdown-menu" :class="{ 'show': showDropdown}" aria-labelledby="navbarDropdown">
            <nuxt-link class="dropdown-item" to="/profile">
              View profile
            </nuxt-link>
            <div class="dropdown-divider" />
            <a class="dropdown-item" href="#" @click="logout">
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showDropdown: false
    }
  },
  methods: {
    logout() {
      this.$store.commit('REMOVE_USER')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss' scoped>
.dropdown-menu {
  right: 0;
  left: auto;
}
</style>
