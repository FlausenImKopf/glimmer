<template>
  <main>
    <h2>Meine Vorfreuden heute</h2>
    <AnticipationsList
      singleNote="single-anticipation"
      placeholderText="Hier die Vorfreude eingeben und mit Enter speichern."
    />
    <AddCalendar placeholderText="Hier die Vorfreude eingeben und mit Enter speichern." />
    <InfoBlurb
      adjusting="adjusting-anticipation"
      text="Info: Speicher deine fertig geschriebene Vorfreude mit Enter"
    />
    <ReturnHomeBtn adjusting="adjusting-anticipation" />
  </main>
</template>

<script>
import AnticipationsList from '../components/AddAnticipationsComponents/AnticipationsList.vue'
import InfoBlurb from '../components/InfoBlurb.vue'
import AddCalendar from '../components/AddAnticipationsComponents/AddCalendar.vue'
import ReturnHomeBtn from '../components/ReturnHomeBtn.vue'

export default {
  components: { AnticipationsList, InfoBlurb, AddCalendar, ReturnHomeBtn },
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
  color: #ec635e;
  font-family: 'Antonio';
  /* background-color: rgb(236, 99, 94, 0.1); */
  /* background-color: rgb(79, 101, 223, 0.1); */
  padding-bottom: 1rem;
  /* border-radius: 4px; */
  text-align: center;
  margin-bottom: 1rem;
}

/* Positioning for return home button */
.btn-wrapper {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>
