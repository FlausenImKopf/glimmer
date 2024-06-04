<template>
  <article class="vorfreuden">
    <h2 class="overview">Vorfreuden</h2>
    <section class="horizontal-list">
      <div class="data-container" @mousedown="currentDate = getPreviousDay()">
        <p class="data">{{ '<' + getDateWithoutTime(getPreviousDay()) }}</p>
      </div>
      <div class="data-container">
        <p class="data" style="font-size: large">{{ getDateWithoutTime(currentDate) }}</p>
      </div>
      <div class="data-container" @mousedown="currentDate = getFollowingDay()">
        <p class="data">{{ getDateWithoutTime(getFollowingDay()) + '>' }}</p>
      </div>
    </section>
    <section class="list">
      <FreudListRow
        v-for="freude in getVorfreuden()"
        :key="freude.id"
        :vorfreude="freude"
        :currentDate="currentDate"
      />
    </section>
  </article>
</template>

<script>
import FreudListRow from '../components/FreudListRow.vue'
import { useAnticipationsStore } from '../stores/anticipations'
export default {
  components: {
    FreudListRow
  },
  created() {
    useAnticipationsStore().getAnticipations()
  },
  data() {
    return {
      currentDate: new Date()
    }
  },

  computed: {
    vorfreuden() {
      return useAnticipationsStore().anticipations
    }
  },

  methods: {
    getDateWithoutTime(date) {
      return (
        '' +
        (date.getDate() < 10 ? 0 : '') +
        date.getDate() +
        '.' +
        (date.getMonth() + 1 < 10 ? 0 : '') +
        (date.getMonth() + 1) +
        '.' +
        date.getFullYear()
      )
    },

    getPreviousDay() {
      let previousDay = new Date(this.currentDate)
      previousDay.setDate(previousDay.getDate() - 1)
      return previousDay
    },
    getFollowingDay() {
      let followingDay = new Date(this.currentDate)
      followingDay.setDate(followingDay.getDate() + 1)
      return followingDay
    },

    getVorfreuden() {
      let result = []
      for (let vorfreude of this.vorfreuden) {
        if (
          (this.istKleiner(new Date(vorfreude.createdAt), this.getFollowingDay()) ||
            this.istGleich(new Date(vorfreude.createdAt), this.getFollowingDay())) &&
          (this.istGroesser(new Date(vorfreude.date), this.getPreviousDay()) ||
            this.istGleich(new Date(vorfreude.date), this.getPreviousDay()))
        ) {
          result.push(vorfreude)
        }
      }
      return result
    },

    istGleich(firstDate, secondDate) {
      return (
        firstDate.getFullYear() == secondDate.getFullYear() &&
        firstDate.getMonth() == secondDate.getMonth() &&
        firstDate.getDate() == secondDate.getDate()
      )
    },
    istKleiner(firstDate, secondDate) {
      if (firstDate.getFullYear() < secondDate.getFullYear()) {
        return true
      } else if (firstDate.getFullYear() == secondDate.getFullYear()) {
        if (firstDate.getMonth() < secondDate.getMonth()) {
          return true
        } else if (firstDate.getMonth() == secondDate.getMonth()) {
          if (firstDate.getDate() < secondDate.getDate()) {
            return true
          }
        }
      }
      return false
    },
    istGroesser(firstDate, secondDate) {
      return !this.istKleiner(firstDate, secondDate) && !this.istGleich(firstDate, secondDate)
    }
  }
}
</script>

<style scoped>
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Antonio';
  font-style: normal;
  font-weight: 400;
  src: url('../../public/antonio-v19-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
.overview {
  font-family: 'Antonio';
  padding: 1rem;
  color: #ec635e;
  text-align: center;
}
.horizontal-list {
  color: #ec635e;
  text-align: center;
  border-bottom: 2px #ec635e solid;
  padding-bottom: 0.7rem;
  padding-top: 0.7rem;
  margin-bottom: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
.data-container {
  position: relative;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  font-family: monospace;
}

.data::before {
  content: ' ';
  position: absolute;
  bottom: -18px;
  left: 40px;
  width: 0.8rem;
  height: 0.8rem;
  background-color: #ec635e;
  border-radius: 50%;
}
</style>
