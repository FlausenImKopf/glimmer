<template>
  <main>
    <NewestAnticipation />
    <NewestGratitude />
  </main>
</template>

<script>
import NewestGratitude from '../components/NewestGratitude.vue'
import NewestAnticipation from '../components/NewestAnticipation.vue'
export default {
  components: { NewestGratitude, NewestAnticipation }
}
</script>

<style scoped>
main {
  padding: 2rem;
}
</style>
