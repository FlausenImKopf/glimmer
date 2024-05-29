<template>
  <main>
    <TheList singleNote="single-gratitude" placeholderText="Ich bin dankbar für..." />
    <button @click="$router.push('/')">speichern</button>
  </main>
</template>

<script>
import TheList from '../components/TheList.vue'
export default {
  components: { TheList },
  props: ['singleNote', 'placeholderText']
}
</script>

<style scoped>
main {
  position: relative;
}

button {
  position: absolute;
  left: 13.5rem;
  color: #101c42;
  background-color: #5ce1e6;
  border: none;
  box-shadow: 1px 2px 5px rgba(92, 225, 230, 0.4);
  border-radius: 0.1rem;
}
</style>
