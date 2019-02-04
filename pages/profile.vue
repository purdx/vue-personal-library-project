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
                <button
                  type="button" 
                  class="btn btn-outline-secondary"
                  @click="showInfoModal"
                >
                  Edit Info
                </button>
                <button
                  type="button" 
                  class="btn btn-outline-secondary"
                  @click="showPassModal"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        v-if="infoModal" 
        ref="infoModal"
      >
        <h3 slot="modal-title">
          Update your info
        </h3>
        <form slot="body" @submit.prevent>
          <div class="form-group">
            <label for="nameInput">
              Name
            </label>
            <input
              id="nameInput" 
              v-model="newName"
              type="text"
              class="form-control"
              placeholder="Enter name"
              required
            >
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">
              Email
            </label>
            <input
              id="exampleInputEmail1"
              v-model="newEmail"
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            >
          </div>
          <button
            type="submit"
            class="btn btn-primary" 
            @click="updateInfo"
          >
            Submit
          </button>
        </form>
      </Modal>
      <Modal
        v-if="passModal" 
        ref="passModal"
      >
        <h3 slot="modal-title">
          Update your password
        </h3>
        <form slot="body" @submit.prevent>
          <div class="form-group">
            <label for="currentPass">
              Current passward
            </label>
            <input
              id="currentPass" 
              v-model="currentPass"
              type="password"
              class="form-control"
              placeholder="Password"
            >
          </div>
          <div class="form-group">
            <label for="newPass">
              New password
            </label>
            <input
              id="newPass"
              v-model="newPass"
              type="password"
              class="form-control"
              placeholder="Password"
            >
          </div>
          <div class="form-group">
            <label for="confirmNewPass">
              Confirm new password
            </label>
            <input
              id="confirmNewPass" 
              v-model="newPassConfirm"
              type="password"
              class="form-control"
              placeholder="Password"
            >
          </div>
          <button
            type="submit"
            class="btn btn-primary" 
            @click="updatePass"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Modal from '@/components/Modal'
import successNotif from '@/utils/successNotif'
export default {
  name: 'TheProfile',
  components: {
    Header,
    Modal
  },
  data() {
    return {
      infoModal: false,
      passModal: false,
      newName: '',
      newEmail: '',
      currentPass: '',
      newPass: '',
      newPassConfirm: ''
    }
  },
  methods: {
    showInfoModal() {
      this.infoModal = true
      setTimeout(() => {
        this.$refs.infoModal.show()
      }, 0)
    },
    showPassModal() {
      this.passModal = true
      setTimeout(() => {
        this.$refs.passModal.show()
      }, 0)
    },
    updateInfo() {
      this.$axios({
        method: 'PATCH',
        url: process.env.USER_API,
        data: {
          name: this.newName,
          email: this.newEmail
        }
      }).then(response => {
        this.infoModal = false
        this.$store.commit('SET_USERNAME', response.data.data.name)
        this.$store.commit('SET_EMAIL', response.data.data.email)
        successNotif(this, 'Your information updated successfully')
      })
    },
    updatePass() {
      this.$axios({
        method: 'PATCH',
        url: process.env.USER_API,
        data: {
          name: this.$store.state.userName,
          email: this.$store.state.email,
          current_password: this.currentPass,
          password: this.newPass,
          password_confirmation: this.newPassConfirm
        }
      }).then(response => {
        this.passModal = false
        successNotif(this, 'Password changed successfully')
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.profile-buttons {
  margin-top: 40px;
}
</style>
