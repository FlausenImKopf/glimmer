<template>
  <main>
    <TheList singleNote="single-gratitude" placeholderText="Ich bin dankbar für..." />
    <button @click="$router.push('/')">zurück zu Mein Tag</button>
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
  bottom: -23rem;
  left: 10rem;
  color: #5ce1e6;
  background-color: rgb(92, 225, 230, 0.1);
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
}

button:hover {
  background-color: rgb(92, 225, 230, 0.4);
}
</style>
