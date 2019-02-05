<template>
  <div>
    <div class="modal" tabindex="-1" role="dialog" :class="{ 'd-block': showModal }">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <slot class="modal-title" name="modal-title" />
            <slot name="header" />
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="showModal = false">
              <span aria-hidden="true">
                &times;
              </span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="body" />
          </div>
          <div class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    info: {
      default: function() {
        return {}
      },
      type: Object
    }
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    show() {
      this.showModal = true
    },
    hide() {
      this.showModal = false
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~assets/sass/required-bootstrap-vars';
@import 'node_modules/bootstrap/scss/modal';
.modal {
  overflow-y: auto;
  &::before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
