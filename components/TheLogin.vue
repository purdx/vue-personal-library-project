<template>
  <div class="container">
    <div class="row login justify-content-md-center align-items-center">
      <div class="col-md-8 col-lg-6">
        <div class="card">
          <div class="card-header">
            Login
          </div>
          <div class="card-body">
            <form @submit.prevent>
              <div class="form-group">
                <label for="clientID">
                  Client ID
                </label>
                <input
                  id="clinetID"
                  v-model="clientID"
                  type="text"
                  class="form-control"
                  :class="{'border-danger': error}"
                  aria-describedby="clientIdHelp"
                  placeholder="Enter client ID"
                  @keyup="error = false"
                >
                <small v-show="error" class="form-text text-danger">
                  Sorry, you should enter the client ID.
                </small>
              </div>
              <button type="submit" class="btn btn-primary" @click="login">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientID: '',
      error: false
    }
  },
  methods: {
    login() {
      if (this.clientID === '') {
        this.error = true
      } else {
        location = `http://hiring.bsup.tk/oauth/authorize?client_id=${
          this.clientID
        }&redirect_uri=http://localhost:3000&response_type=token&scope=`
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.login {
  min-height: 100vh;
}
.form-text {
  position: absolute;
}
.form-group {
  margin-bottom: 2.4rem;
}
</style>
