<template>
  <main>
    <h2>Meine Dankbarkeiten heute</h2>
    <GratitudesList singleNote="single-gratitude" placeholderText="Ich bin dankbar für..." />
    <AddText />
    <InfoBlurb
      adjusting="adjusting-gratitude"
      text="Info: Speicher deine fertig geschriebene Dankbarkeit mit Enter"
    />
    <ReturnHomeBtn adjusting="adjusting-gratitude" />
  </main>
</template>

<script>
import GratitudesList from '../components/AddGratitudesComponents/GratitudesList.vue'
import InfoBlurb from '../components/InfoBlurb.vue'
import AddText from '../components/AddGratitudesComponents/AddText.vue'
import ReturnHomeBtn from '../components/ReturnHomeBtn.vue'

export default {
  components: { GratitudesList, InfoBlurb, AddText, ReturnHomeBtn },
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

/* Positioning for return home button */
.btn-wrapper {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>
