<template>
  <main>
    <h2>Mein Tag</h2>
    <NewestAnticipation />
    <NewestGratitude />
    <JarOfJoy />
  </main>
</template>

<script>
import NewestGratitude from '../components/NewestGratitude.vue'
import NewestAnticipation from '../components/NewestAnticipation.vue'
import JarOfJoy from '../components/JarOfJoy.vue'
export default {
  components: { NewestGratitude, NewestAnticipation, JarOfJoy }
}
</script>

<style scoped>
main {
  padding: 2rem;
}

h2 {
  color: #4f65df;
  font-family: 'Antonio';
  background-color: rgb(79, 101, 223, 0.1);
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;
}
</style>
