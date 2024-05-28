<template>
  <p>{{ note.text }}</p>
</template>

<script>
export default {
  props: {
    note: Object
  }
}
</script>

<style scoped>
p {
  margin: 0;
}
</style>
