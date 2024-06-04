<template>
  <div class="wrapper">
    <p class="message">{{ note.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    note: Object
  }
}
</script>

<style scoped>
.wrapper {
  _position: relative;
}
.message {
  margin: 0;
  font-family: monospace;
}
.star {
  width: 2rem;
}
.message::after {
  content: url(../../public/header-star-green.png);
  position: absolute;
  transform: scale(0.13);
  top: -10rem;
}
</style>
