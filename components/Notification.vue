<template>
  <div class="notifs-container">
    <div
      v-for="(notif, index) in $store.state.notifs"
      :key="index"
      class="alert alert-dismissible fade show"
      role="alert"
      :class="`alert-${notif.type}`"
    >
      {{ notif.message }}
      <button
        type="button"
        class="close" 
        data-dismiss="alert"
        aria-label="Close"
        @click="deleteNotif(index)"
      >
        <span aria-hidden="true">
          &times;
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  methods: {
    deleteNotif(index) {
      this.$store.commit('REMOVE_NOTIF', index)
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~assets/sass/required-bootstrap-vars';
@import 'node_modules/bootstrap/scss/alert';

.notifs-container {
  position: fixed;
  bottom: 0;
  right: 16px;
  max-width: 400px;
}
</style>
