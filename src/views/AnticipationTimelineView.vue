<template>
  <main>
    <article class="anticipations">
      <h2 class="overview">Vorfreuden</h2>
      <section class="horizontal-list">
        <div class="data-container move-through-time" @mousedown="currentDate = getPreviousDay()">
          <p class="data">{{ '<' + getDateWithoutTime(getPreviousDay()) }}</p>
        </div>
        <div class="data-container">
          <p class="data" style="font-size: large">{{ getDateWithoutTime(currentDate) }}</p>
        </div>
        <div class="data-container move-through-time" @mousedown="currentDate = getFollowingDay()">
          <p class="data">{{ getDateWithoutTime(getFollowingDay()) + '>' }}</p>
        </div>
      </section>
      <section class="list">
        <AntiTimelineList
          v-for="anticipation in getSortedAnticipations()"
          :key="anticipation.id"
          :anticipation="anticipation"
          :currentDate="currentDate"
        />
      </section>
    </article>
    <ReturnHomeBtn adjusting="adjusting-anticipation" />
  </main>
</template>

<script>
import AntiTimelineList from '../components/AntiTimelineComponents/AntiTimelineList.vue'
import ReturnHomeBtn from '../components/ReturnHomeBtn.vue'
import { useAnticipationsStore } from '../stores/anticipations'

export default {
  components: {
    AntiTimelineList,
    ReturnHomeBtn
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
    anticipations() {
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

    getSortedAnticipations() {
      let result = []
      for (let vorfreude of this.anticipations) {
        if (
          (this.dateIsSmaller(new Date(vorfreude.createdAt), this.getFollowingDay()) ||
            this.dateIsEqual(new Date(vorfreude.createdAt), this.getFollowingDay())) &&
          (this.dateIsBigger(new Date(vorfreude.date), this.getPreviousDay()) ||
            this.dateIsEqual(new Date(vorfreude.date), this.getPreviousDay()))
        ) {
          result.push(vorfreude)
        }
      }
      return result
    },

    dateIsEqual(firstDate, secondDate) {
      return (
        firstDate.getFullYear() == secondDate.getFullYear() &&
        firstDate.getMonth() == secondDate.getMonth() &&
        firstDate.getDate() == secondDate.getDate()
      )
    },
    dateIsSmaller(firstDate, secondDate) {
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
    dateIsBigger(firstDate, secondDate) {
      return !this.dateIsSmaller(firstDate, secondDate) && !this.dateIsEqual(firstDate, secondDate)
    }
  }
}
</script>

<style scoped>
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

.move-through-time:hover {
  cursor: pointer;
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

/* Container to position return home button relative to*/
main {
  position: relative;
  /* max-width: 20rem;
  min-width: 20rem; */
  min-height: 89vh;
  background-color: #020b30;
  border-radius: 2rem;
  overflow: hidden;
  /* padding: 0.5rem; */
}

/* Positioning for return home button */
.btn-wrapper {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>
