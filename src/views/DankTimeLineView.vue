<template>
  <article class="danklist">
    <div class="calendar">
      <VCalendar borderless @dayclick="click()" />
    </div>
    <h2>Dankbarkeiten</h2>
    <section class="list">
      <section v-for="(dankbarkeitenEinesTages, datum) in getDankbarkeiten()" :key="datum">
        <label class="datum">{{ datum }}</label>
        <DankListRow
          class="danklist"
          v-for="dank in dankbarkeitenEinesTages"
          :key="dank.id"
          :note="dank"
        />
      </section>
    </section>
  </article>
</template>

<script>
import DankListRow from '../components/TimeLineRow.vue'
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
          datum: new Date(2024, 4, 23, 12, 58)
        },
        {
          id: 2,
          message: 'ich bin dankbar dafür, dass Ibrahim uns hilft',
          datum: new Date(2024, 4, 23, 10, 58)
        },
        {
          id: 3,
          message: 'ich bin Johanna dankbar für die Zusammenarbeit',
          datum: new Date(2024, 4, 22, 12, 58)
        },
        {
          id: 4,
          message: 'ich bin dankbar für das angenehme Gespräch',
          datum: new Date(2024, 4, 23, 11, 58)
        },
        {
          id: 5,
          message: 'ich bin dankbar dafür, dass mein Mann heute den Einkauf erledigt hat',
          datum: new Date(2024, 4, 22, 11, 58)
        }
      ]
    }
  },
  methods: {
    click() {
      console.log('juhuhu')
    },
    getDankbarkeiten() {
      return this.splitSortedDankbarkeiten(this.sortDankbarkeitenForDate(this.dankbarkeiten))
    },
    sortDankbarkeitenForDate() {
      return this.dankbarkeiten.sort(
        (dank1, dank2) => dank2.datum.getTime() - dank1.datum.getTime()
      )
    },
    splitSortedDankbarkeiten(dankbarkeiten) {
      let result = {}
      result[this.getDateWithoutTime(this.dankbarkeiten[0].datum)] = [dankbarkeiten[0]]

      for (let i = 1; i < dankbarkeiten.length; i++) {
        let dateWithoutTime = this.getDateWithoutTime(this.dankbarkeiten[i].datum)
        if (Object.keys(result).includes(dateWithoutTime)) {
          result[dateWithoutTime].push(dankbarkeiten[i])
        } else {
          result[dateWithoutTime] = [dankbarkeiten[i]]
        }
      }
      return result
    },
    getDateWithoutTime(date) {
      return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
    }
  }
}
</script>
<style scoped>
h2 {
  padding: 1rem;
  text-align: center;
}
.danklist {
  color: Cornflowerblue;
  padding-top: none;
  padding-bottom: none;
  position: relative;
}
.list {
  border-left: 2px Cornflowerblue solid;
}
.calendar {
  position: absolute;
  top: 80px;
  left: 19px;
  z-index: 1;
}
.datum {
  color: white;
  padding-left: 1rem;
}
</style>
