<template>
  <main>
    <h2>Meine Dankbarkeiten heute</h2>
    <GratitudesList singleNote="single-gratitude" placeholderText="Ich bin dankbar für..." />
    <AddText />
    <InfoBlurb
      adjusting="adjusting-gratitude"
      text="Info: Speicher deine fertig geschriebene Dankbarkeit mit Enter"
    />
    <div class="btn-wrapper">
      <button @click="$router.push('/')">zurück zu Mein Tag</button>
    </div>
  </main>
</template>

<script>
import GratitudesList from '../components/AddGratitudesComponents/GratitudesList.vue'
import InfoBlurb from '../components/InfoBlurb.vue'
import AddText from '../components/AddGratitudesComponents/AddText.vue'

export default {
  components: { GratitudesList, InfoBlurb, AddText },
  props: ['singleNote', 'placeholderText', 'text', 'adjusting']
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
  padding: 2rem;
}

h2 {
  color: #5ce1e6;
  font-family: 'Antonio';
  padding-bottom: 1rem;
  margin-top: 0rem;
  margin-bottom: 1rem;
  text-align: center;
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
  font-family: monospace;
}

button:hover {
  background-color: rgb(92, 225, 230, 0.4);
  cursor: pointer;
}
</style>
