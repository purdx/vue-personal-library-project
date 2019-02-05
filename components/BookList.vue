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
                  <div>price: {{ currencyFormatter(book.price) }}</div>
                </div>
                <div class="col-sm-6 book-list__btn-wrapper d-flex">
                  <button
                    class="btn btn-secondary book-list__btn"
                    @click="editBook(book, index)"
                  >
                    Edit
                  </button>
                  <button 
                    class="btn btn-secondary book-list__btn"
                    @click="showDeleteBookConfirmtion(book, index)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Modal ref="editBookModal" :info="selectedBook">
      <div slot="body">
        <div class="card">
          <div class="card-header">
            Edit the book
          </div>
          <div class="card-body">
            <form @submit.prevent>
              <div class="form-group">
                <label for="title">
                  Title
                </label>
                <input
                  id="title"
                  v-model="selectedBook.title"
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter book title"
                >
              </div>
              <div class="form-group">
                <label for="author">
                  Author
                </label>
                <input
                  id="author"
                  v-model="selectedBook.author"
                  type="text"
                  class="form-control"
                  placeholder="Enter author name"
                >
              </div>
              <div class="form-group">
                <label for="price">
                  Price
                </label>
                <input
                  id="price"
                  v-model="selectedBook.price"
                  type="text"
                  class="form-control"
                  placeholder="Enter author name"
                >
              </div>
              <button type="submit" class="btn btn-primary" @click="updateBookInfo(selectedBook.id)">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
    <Modal ref="deleteConfirmtionModal" :info="selectedBook">
      <div slot="body">
        <p>Are you sure that you want to delete the book?</p>
      </div>
      <div slot="footer">
        <button type="submit" class="btn btn-primary" @click="deleteBook(selectedBook.id)">
          Yes
        </button>
      </div>
    </Modal>
  </section>
</template>

<script>
import successNotif from '@/utils/successNotif'
import currencyFormatter from '@/utils/currencyFormatter'
import Modal from '@/components/Modal'
export default {
  name: 'BookList',
  components: {
    Modal
  },
  data() {
    return {
      books: [],
      selectedBook: {}
    }
  },
  created() {
    this.$axios(process.env.BOOKS_API).then(response => {
      this.books = response.data.data
    })
  },
  methods: {
    showDeleteBookConfirmtion(book, index) {
      this.selectedBook = {
        title: book.title,
        author: book.author,
        price: book.price,
        id: book.id,
        index: index
      }
      this.$refs.deleteConfirmtionModal.show()
    },
    deleteBook(bookID) {
      this.$axios({
        method: 'DELETE',
        url: process.env.BOOKS_API + `/${bookID}`
      }).then(() => {
        successNotif(this, 'Book deleted successfully.')
        this.books.splice(this.selectedBook.index, 1)
        this.$refs.deleteConfirmtionModal.hide()
      })
    },
    editBook(book, index) {
      this.selectedBook = {
        title: book.title,
        author: book.author,
        price: book.price,
        id: book.id,
        index: index
      }
      this.$refs.editBookModal.show()
    },
    updateBookInfo(bookID) {
      this.$axios({
        method: 'PATCH',
        url: `${process.env.BOOKS_API}/${bookID}`,
        data: {
          title: this.selectedBook.title,
          author: this.selectedBook.author,
          price: this.selectedBook.price
        }
      }).then(response => {
        const selectedBookIndex = this.selectedBook.index
        this.books[selectedBookIndex].title = response.data.data.title
        this.books[selectedBookIndex].author = response.data.data.author
        this.books[selectedBookIndex].price = response.data.data.price
        this.$refs.editBookModal.hide()
        successNotif(this, 'Book edited successfully.')
      })
    },
    currencyFormatter(amount) {
      return currencyFormatter(amount)
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
