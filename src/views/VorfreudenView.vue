<template>
  <main>
    <TheVorfreuden
      singleNote="single-anticipation"
      placeholderText="Hier die Vorfreude eingeben und mit Enter speichern."
    />
    <button @click="$router.push('/')">zurück zu Mein Tag</button>
  </main>
</template>

<script>
import TheVorfreuden from '../components/TheVorfreuden.vue'
export default {
  components: { TheVorfreuden },
  props: ['singleNote', 'placeholderText']
}
</script>

<style scoped>
main {
  position: relative;
}

button {
  position: absolute;
  bottom: -24rem;
  left: 10rem;
  color: #ec635e;
  background-color: rgb(236, 99, 94, 0.1);
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
}

button:hover {
  background-color: rgb(236, 99, 94, 0.4);
}
</style>
