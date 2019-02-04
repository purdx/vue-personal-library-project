<template>
  <section class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header d-flex">
          <div class="card__title">
            Your book list
          </div>
          <nuxt-link
            class="btn btn-sm btn-primary ml-auto"
            to="/add-book"
          >
            Add new book
          </nuxt-link>
        </div>
        <div class="card-body">
          <ul class="list-group book-list">
            <li
              v-for="(book, index) in books" 
              :key="book.id"
              class="list-group-item"
            >
              <div class="row">
                <div class="col-sm-6">
                  <div>Title: {{ book.title }}</div>
                  <div>Author: {{ book.author }}</div>
                  <div>price: {{ book.price }}</div>
                </div>
                <div class="col-sm-6 book-list__btn-wrapper d-flex">
                  <button class="btn btn-secondary book-list__btn">
                    Edit
                  </button>
                  <button class="btn btn-secondary book-list__btn" @click="deleteBook(book, index)">
                    Delete
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import successNotif from '@/utils/successNotif'
export default {
  name: 'BookList',
  data() {
    return {
      books: []
    }
  },
  created() {
    this.$axios(process.env.BOOKS_API).then(response => {
      this.books = response.data.data
    })
  },
  methods: {
    deleteBook(book, index) {
      this.$axios({
        method: 'DELETE',
        url: process.env.BOOKS_API + `/${book.id}`
      }).then(response => {
        successNotif(this, 'Book deleted successfully.')
        this.books.splice(index, 1)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~assets/sass/required-bootstrap-vars';

.book-list__btn {
  margin: 0 4px;
}
.card__title {
  line-height: 31px;
}
@include media-breakpoint-down(sm) {
  .book-list__btn-wrapper {
    margin-top: 16px;
  }
}
@include media-breakpoint-up(sm) {
  .book-list__btn-wrapper {
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
