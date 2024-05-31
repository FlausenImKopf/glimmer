<template>
  <div v-if="show" class="modal-mask">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    message: String
  }
}
</script>

<style>
.modal-mask {
  position: absolute;
  z-index: 1;
  top: 0px;
  _left: 0;
  _width: 100%;
  _height: 100%;

  _transition: opacity 0.3s ease;

  width: 200px;

  padding: 1rem 0.5rem;
  background-color: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
  pointer-events: none;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
