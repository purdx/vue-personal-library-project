<template>
  <div>
    <Header />
    <div class="container page-content">
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              Add a new book
            </div>
            <div class="card-body">
              <form @submit.prevent>
                <div class="form-group">
                  <label for="title">
                    Title
                  </label>
                  <input
                    id="title"
                    v-model="bookFields.title"
                    type="text"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter book title"
                    required
                  >
                </div>
                <div class="form-group">
                  <label for="author">
                    Author
                  </label>
                  <input
                    id="author"
                    v-model="bookFields.author"
                    type="text"
                    class="form-control"
                    placeholder="Enter author name"
                    required
                  >
                </div>
                <div class="form-group">
                  <label for="price">
                    Price
                  </label>
                  <input
                    id="price"
                    v-model="bookFields.price" 
                    type="text"
                    class="form-control"
                    placeholder="Enter author name"
                    required
                  >
                </div>
                <button type="submit" class="btn btn-primary" @click="submitBook">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import successNotif from '@/utils/successNotif'
export default {
  name: 'AddBook',
  components: {
    Header
  },
  data() {
    return {
      bookFields: {
        title: '',
        author: '',
        price: ''
      }
    }
  },
  methods: {
    submitBook() {
      this.$axios({
        method: 'POST',
        url: process.env.BOOKS_API,
        data: {
          title: this.bookFields.title,
          author: this.bookFields.author,
          price: this.bookFields.price
        }
      }).then(response => {
        Object.keys(this.bookFields).forEach(
          prop => (this.bookFields[prop] = '')
        )
        successNotif(this, 'Book added succussfully.')
      })
    }
  }
}
</script>

<style scoped>
</style>
