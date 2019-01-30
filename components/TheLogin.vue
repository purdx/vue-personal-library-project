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
                  aria-describedby="clientIdHelp"
                  placeholder="Enter client ID"
                >
                <small id="clientIdhelp" class="form-text">
                  We'll never share your email with anyone else.
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
      clientID: ''
    }
  },
  methods: {
    login() {
      this.$axios({
        method: 'get',
        url: 'http://hiring.bsup.tk/api/user',
        headers: {
          Accept: 'application/json',
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6NmFmNzdjMzJlZjkzNGU4ZTk3MTZjMWFmMjg3NGUyMDA1NWIwOTUwNDU1MDMxYWI2Zjc0YWE1ZDBjYjlkZWIxNDA2In0'
        }
      })
        .then(function(response) {
          alert(response)
        })
        .catch(function(response) {
          alert(response)
          alert('hi')
        })
      // location = `http://hiring.bsup.tk/oauth/authorize?client_id=${this.clientID}&redirect_uri=http://localhost&response_type=token&scope=`
    }
  }
}
</script>

<style scoped lang='scss'>
.login {
  min-height: 100vh;
}
</style>
