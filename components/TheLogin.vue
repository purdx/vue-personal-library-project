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
        url: 'http://localhost:3000/api/user',
        headers: {
          Accept: 'application/json',
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU5MjAwZTg1OTJmYjBiOTgwOTk4YWFhMGNmY2IzNWQxNGY4OTkwNzEzOTU1OWY1OTQ1ZDgzZDk1M2U5MzQ5OGRmNjRiMWJkYThjMzcxYTE0In0.eyJhdWQiOiIxIiwianRpIjoiNTkyMDBlODU5MmZiMGI5ODA5OThhYWEwY2ZjYjM1ZDE0Zjg5OTA3MTM5NTU5ZjU5NDVkODNkOTUzZTkzNDk4ZGY2NGIxYmRhOGMzNzFhMTQiLCJpYXQiOjE1NDg4Nzg5NzEsIm5iZiI6MTU0ODg3ODk3MSwiZXhwIjoxNTgwNDE0OTcxLCJzdWIiOiIyMSIsInNjb3BlcyI6W119.dIy3U6j3FwliiIJrtFDZy7roZNbcIN-ou57yTXNGoGU9DbonYHvLOn63lBPFNo-vbnJb4MjYRNPW9Y8XL0kxmLQ_BydBoeiyS2bP-pRev8WLvP90YIAo6erVToTtaFrwfiZBlUQP_OM_SLm2_-89qZ8f9tRc2uNFwtrPX5ZXOSCL8Erg_7O6d8JM5dWP_dhVkCxiML9MA4gx3zOCmqvY0Cu5sEmVM_qxovV3Gs-l4L0ow6r8HmlzdhWnhVe3sO_1xZCgVSbytParf5YhPhNPF8w1OsAeMtaDtWMjBNlRNW87kaxDdKR0241lhFEOpG09pa83RdNY_f9qeQLkvv5jrb6GR9dtIqe8mIpYE6EzH-JhAtC_TdA70ic4LpRlnam-k5i7U2bGPEogythrcCDJ4zotRRO-Hv45yO_LRYDg2BMapwicE0u_CCeelqkHnQvvK9P3kOhFX6UWp9nO4ZzxghwohNi4tCuGfR7krJwF1acu0ABxgqzFGJ8zLQcgfVufCGTBasEPB4LofdWWyLm9R0-X8oUKVfyG-S8zasuBQBP-zRwGYg2MLDDBYfqhHalRXKX8XGsnEPOZ4SMgQ5B8vSzLDdDlJORI5VV8yuNxfGWbJGtL9UBKVh-a6FKuUt9rSy_qObC5gNwY5oChX9w2674EOO8Mgr_ynJo6ndo07zk'
        }
      })
        .then(function(response) {
          alert(response.data)
        })
        .catch(function(response) {
          alert(response)
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
