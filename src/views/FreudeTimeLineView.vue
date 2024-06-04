<template>
  <article class="vorfreuden">
    <h2 class="overview">Vorfreuden</h2>
    <section class="horizontal-list">
      <div class="data-container" @mousedown="currentDate = getPreviousDay()">
        <p class="data">{{ getDateWithoutTime(getPreviousDay()) }}</p>
      </div>
      <div class="data-container">
        <p class="data">{{ getDateWithoutTime(currentDate) }}</p>
      </div>
      <div class="data-container" @mousedown="currentDate = getFollowingDay()">
        <p class="data">{{ getDateWithoutTime(getFollowingDay()) }}</p>
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
import { v4 as uuidv4 } from 'uuid'
export default {
  components: {
    FreudListRow
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
          (this.istKleiner(vorfreude.createdAt, this.getFollowingDay()) ||
            this.istGleich(vorfreude.createdAt, this.getFollowingDay())) &&
          (this.istGroesser(vorfreude.date, this.getPreviousDay()) ||
            this.istGleich(vorfreude.date, this.getPreviousDay()))
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
  },

  data() {
    return {
      currentDate: new Date(),
      vorfreuden: [
        //Eintagsfreuden
        {
          id: uuidv4(),
          text: 'ich freue mich auf die Pause!',
          createdAt: new Date(2024, 4, 23, 12, 58),
          date: new Date(2024, 4, 23, 0, 0),
          userId: 1
        },
        {
          id: uuidv4(),
          text: 'ich freue mich auf das Treffen heute Abend!',
          createdAt: new Date(2024, 4, 24, 12, 58),
          date: new Date(2024, 4, 24, 0, 0),
          userId: 1
        },
        {
          id: uuidv4(),
          text: 'ich freue mich auf das Abendessen mit der Familie!',
          createdAt: new Date(2024, 4, 25, 12, 58),
          date: new Date(2024, 4, 25, 0, 0),
          userId: 1
        },
        //Zweitagsfreuden
        {
          id: uuidv4(),
          text: 'ich freue mich auf den Ausflug!',
          createdAt: new Date(2024, 5, 5, 12, 58),
          date: new Date(2024, 5, 6, 0, 0),
          userId: 1
        },
        {
          id: uuidv4(),
          text: 'ich freue mich auf die Präsentation der App!',
          createdAt: new Date(2024, 5, 1, 12, 58),
          date: new Date(2024, 5, 2, 0, 0),
          userId: 1
        },
        //Dreitagsfreuden
        {
          id: uuidv4(),
          text: 'ich freue mich auf das Wochenende!',
          createdAt: new Date(2024, 4, 29, 12, 58),
          date: new Date(2024, 4, 31, 0, 0),
          userId: 1
        },
        //Mehrtagsfreuden
        {
          id: uuidv4(),
          text: 'ich freue mich auf den Urlaub!',
          createdAt: new Date(2024, 4, 20, 12, 58),
          date: new Date(2024, 5, 23, 0, 0),
          userId: 1
        },
        {
          id: uuidv4(),
          text: 'ich freue mich auf den Sommer!',
          createdAt: new Date(2024, 4, 20, 12, 58),
          date: new Date(2024, 6, 24, 0, 0),
          userId: 1
        },
        {
          id: uuidv4(),
          text: 'ich freue mich auf den Besuch!',
          createdAt: new Date(2024, 4, 21, 12, 58),
          date: new Date(2024, 4, 31, 0, 0),
          userId: 1
        },
        {
          id: uuidv4(),
          text: 'ich freue mich auf die Reise!',
          createdAt: new Date(2024, 5, 1, 12, 58),
          date: new Date(2024, 6, 28, 0, 0),
          userId: 1
        },
        {
          id: uuidv4(),
          text: 'ich freue mich auf das Konzert!',
          createdAt: new Date(2024, 5, 3, 12, 58),
          date: new Date(2024, 5, 28, 0, 0),
          userId: 1
        },
        {
          id: uuidv4(),
          text: 'ich freue mich auf das Wiedersehen mit meiner Schulfreundin!',
          createdAt: new Date(2024, 5, 5, 12, 58),
          date: new Date(2024, 5, 10, 0, 0),
          userId: 1
        },
        {
          id: uuidv4(),
          text: 'ich freue mich auf das Festival!',
          createdAt: new Date(2024, 4, 20, 12, 58),
          date: new Date(2024, 7, 31, 0, 0),
          userId: 1
        }
      ]
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
}
.data-container {
  position: relative;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
}
.data::before {
  content: ' ';
  position: absolute;
  bottom: -18px;
  left: 30px;
  width: 0.8rem;
  height: 0.8rem;
  background-color: #ec635e;
  border-radius: 50%;
}
</style>
