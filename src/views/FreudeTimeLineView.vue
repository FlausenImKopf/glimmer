<template>
  <article class="vorfreuden">
    <h2 class="overview">Vorfreuden</h2>
    <section class="horizontal-list">
      <p>{{ '23.05.2024' }}</p>
      <p>{{ '24.05.2024' }}</p>
      <p>{{ '25.05.2024' }}</p>
    </section>
    <section class="list">
      <FreudListRow
        v-for="freude in vorfreuden"
        :key="freude.id"
        :vorfreude="freude"
        :datum="currentDate"
      />
    </section>
  </article>
</template>

<script>
import FreudListRow from '../components/FreudListRow.vue'
export default {
  components: {
    FreudListRow
  },
  data() {
    return {
      currentDate: new Date(2024, 4, 24, 0, 0),
      vorfreuden: [
        {
          id: 1,
          message: 'ich freue mich auf das Wochenende!',
          datum: new Date(2024, 4, 22, 12, 58),
          enddatum: new Date(2024, 4, 24, 0, 0)
        },
        {
          id: 2,
          message: 'ich freue mich auf den Urlaub!',
          datum: new Date(2024, 4, 22, 12, 58),
          enddatum: new Date(2024, 4, 28, 0, 0)
        }
      ]
    }
  }
}
</script>

<style scoped>
.overview {
  padding: 1rem;
  color: Hotpink;
  text-align: center;
}
.horizontal-list {
  color: Hotpink;
  text-align: center;
  border-bottom: 2px hotpink solid;
  padding-bottom: 0.7rem;
  display: flex;
  justify-content: space-between;
}
</style>
