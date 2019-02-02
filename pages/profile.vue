<template>
  <div>
    <Header />
    <div class="container page-content">
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              Your profile
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">
                  Name: {{ $store.state.userName }}
                </li>
                <li class="list-group-item">
                  Email: {{ $store.state.email }}
                </li>
              </ul>
              <div class="profile-buttons">
                <button type="button" class="btn btn-outline-secondary">
                  Edit Info
                </button>
                <button type="button" class="btn btn-outline-secondary">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'TheProfile',
  components: {
    Header
  }
}
</script>

<style lang='scss' scoped>
.profile-buttons {
  margin-top: 40px;
}
</style>
