<template>
  <main>
    <h2>Mein Tag</h2>
    <NewestAnticipation />
    <NewestGratitude />
    <div class="spacer"></div>
    <JarOfJoy />
  </main>
</template>

<script>
import NewestGratitude from '../components/HomeViewComponents/NewestGratitude.vue'
import NewestAnticipation from '../components/HomeViewComponents/NewestAnticipation.vue'
import JarOfJoy from '../components/HomeViewComponents/JarOfJoy.vue'

export default {
  components: { NewestGratitude, NewestAnticipation, JarOfJoy }
}
</script>

<style scoped>
main {
  padding: 2rem;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.spacer {
  flex-grow: 1;
}

h2 {
  color: #4f65df;
  font-family: 'Antonio';
  background-color: rgba(79, 101, 223, 0.1);
  padding: 1rem;
  border-radius: 4px;
  margin-top: 0rem;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
