<template>
  <article class="vorfreuden">
    <h2 class="overview">Vorfreuden</h2>
    <section class="horizontal-list">
      <div class="data-container">
        <p class="data">{{ '23.05.2024' }}</p>
      </div>
      <div class="data-container">
        <p class="data">{{ '24.05.2024' }}</p>
      </div>
      <div class="data-container">
        <p class="data">{{ '25.05.2024' }}</p>
      </div>
    </section>
    <section class="list">
      <FreudListRow
        v-for="freude in vorfreuden"
        :key="freude.id"
        :vorfreude="freude"
        :currentDate="currentDate"
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
        //Eintagsfreuden
        {
          id: 1,
          message: 'ich freue mich auf das Wochenende!',
          createdAt: new Date(2024, 4, 23, 12, 58),
          enddatum: new Date(2024, 4, 23, 0, 0)
        },
        {
          id: 2,
          message: 'ich freue mich auf den Urlaub!',
          createdAt: new Date(2024, 4, 24, 12, 58),
          enddatum: new Date(2024, 4, 24, 0, 0)
        },
        {
          id: 3,
          message: 'ich freue mich auf den Urlaub!',
          createdAt: new Date(2024, 4, 25, 12, 58),
          enddatum: new Date(2024, 4, 25, 0, 0)
        },
        //Zweitagsfreuden
        {
          id: 4,
          message: 'ich freue mich auf den Urlaub!',
          createdAt: new Date(2024, 4, 23, 12, 58),
          enddatum: new Date(2024, 4, 24, 0, 0)
        },
        {
          id: 5,
          message: 'ich freue mich auf den Urlaub!',
          createdAt: new Date(2024, 4, 24, 12, 58),
          enddatum: new Date(2024, 4, 25, 0, 0)
        },
        //Dreitagsfreuden
        {
          id: 6,
          message: 'ich freue mich auf den Urlaub!',
          createdAt: new Date(2024, 4, 23, 12, 58),
          enddatum: new Date(2024, 4, 25, 0, 0)
        },
        //Mehrtagsfreuden
        {
          id: 7,
          message: 'ich freue mich auf den Urlaub!',
          createdAt: new Date(2024, 4, 20, 12, 58),
          enddatum: new Date(2024, 4, 23, 0, 0)
        },
        {
          id: 8,
          message: 'ich freue mich auf den Urlaub!',
          createdAt: new Date(2024, 4, 20, 12, 58),
          enddatum: new Date(2024, 4, 24, 0, 0)
        },
        {
          id: 9,
          message: 'ich freue mich auf den Urlaub!',
          createdAt: new Date(2024, 4, 20, 12, 58),
          enddatum: new Date(2024, 4, 25, 0, 0)
        },
        {
          id: 10,
          message: 'ich freue mich auf den Urlaub!',
          createdAt: new Date(2024, 4, 23, 12, 58),
          enddatum: new Date(2024, 4, 28, 0, 0)
        },
        {
          id: 11,
          message: 'ich freue mich auf den Urlaub!',
          createdAt: new Date(2024, 4, 24, 12, 58),
          enddatum: new Date(2024, 4, 28, 0, 0)
        },
        {
          id: 12,
          message: 'ich freue mich auf den Urlaub!',
          createdAt: new Date(2024, 4, 25, 12, 58),
          enddatum: new Date(2024, 4, 28, 0, 0)
        },
        {
          id: 13,
          message: 'ich freue mich auf den Urlaub!',
          createdAt: new Date(2024, 4, 20, 12, 58),
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
.data-container {
  position: relative;
}
.data::before {
  content: ' ';
  position: absolute;
  bottom: -18px;
  left: 30px;
  width: 0.8rem;
  height: 0.8rem;
  background-color: hotpink;
  border-radius: 50%;
}
</style>
