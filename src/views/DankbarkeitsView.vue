<template>
  <main>
    <TheList singleNote="single-gratitude" placeholderText="Ich bin dankbar für..." />
    <div class="btn-wrapper">
      <button @click="$router.push('/')">zurück zu Mein Tag</button>
    </div>
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
  max-width: 20rem;
  min-width: 20rem;
  min-height: 89vh;
  background-color: #020b30;
  border-radius: 2rem;
  overflow: hidden;
}
.btn-wrapper {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

button {
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
