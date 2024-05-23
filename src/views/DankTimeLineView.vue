<template>
  <article class="danklist">
    <h2>Dankbarkeiten</h2>
    <section class="list">
      <DankListRow class="danklist" v-for="dank in dankbarkeiten" :key="dank.id" :dank="dank" />
    </section>
  </article>
</template>

<script>
import DankListRow from '../components/DankListRow.vue'
export default {
  components: {
    DankListRow
  },
  data() {
    return {
      dankbarkeiten: [
        {
          id: 1,
          message: 'ich bin dankbar für das schoene Wetter draussen',
          datum: new Date(2024, 12, 23, 12, 58)
        },
        {
          id: 2,
          message: 'ich bin dankbar dafür, dass Ibrahim uns hilft',
          datum: new Date(2024, 12, 23, 10, 58)
        },
        {
          id: 3,
          message: 'ich bin Johanna dankbar für die Zusammenarbeit',
          datum: new Date(2024, 12, 22, 12, 58)
        },
        {
          id: 4,
          message: 'ich bin dankbar für das angenehme Gespräch',
          datum: new Date(2024, 12, 23, 11, 58)
        },
        {
          id: 5,
          message: 'ich bin dankbar dafür, dass mein Mann heute den Einkauf erledigt hat',
          datum: new Date(2024, 12, 22, 11, 58)
        }
      ]
    }
  }
  // created() {
  //   this.dankbarkeiten[0].datum = new Date(2024, 12, 23, 12, 58)
  // }
}
</script>
<style scoped>
h2 {
  padding: 1rem;
  text-align: center;
}
.danklist {
  color: Cornflowerblue;
}
.list {
  border-left: 2px Cornflowerblue solid;
}
</style>
