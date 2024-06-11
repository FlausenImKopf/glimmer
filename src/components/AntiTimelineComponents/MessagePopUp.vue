<template>
  <div v-if="show" class="popup">
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
.popup {
  position: absolute;
  z-index: 1;
  top: 0px;
  font-family: monospace;
  transition: opacity 0.8s ease;

  width: 200px;

  margin: 5px;
  _padding: 5px;
  background-color: #020b30;
  border-radius: 2px;
  transition: all 0.3s ease;
  pointer-events: none;

  border: 1px #4f65df solid;
}
</style>
