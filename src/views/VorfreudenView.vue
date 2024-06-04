<template>
  <main>
    <TheVorfreuden
      singleNote="single-anticipation"
      placeholderText="Hier die Vorfreude eingeben und mit Enter speichern."
    />
    <div class="btn-wrapper">
      <button @click="$router.push('/')">zurück zu Mein Tag</button>
    </div>
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
