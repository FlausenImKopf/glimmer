<template>
  <article class="danklist">
    <section class="overview">
      <button class="all-view-button" @click="resetSelectedDay()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-calendar"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
          />
        </svg>
      </button>

      <h2>Dankbarkeiten</h2>

      <button class="calendar-button" @click="toggleVisibility">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-calendar-date"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"
          />
          <path
            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
          />
        </svg>
      </button>
    </section>

    <div v-if="isVisibleCalendar" class="toggle-element">
      <div class="calendar">
        <VDatePicker v-model="selectedDate" mode="selectedDate" @dayclick="toggleVisibility()" />
      </div>
    </div>

    <section class="list">
      <section
        v-for="(dankbarkeitenEinesTages, datum) in getDankbarkeiten()"
        :key="datum"
        class="section"
      >
        <label class="datum">{{ datum }}</label>
        <GratiTimelineList
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
import GratiTimelineList from '../components/GratiTimelineList.vue'
import { useGratitudesStore } from '../stores/gratitudes'

export default {
  components: {
    GratiTimelineList
  },

  created() {
    useGratitudesStore().getGratitudes()
  },
  computed: {
    dankbarkeiten() {
      return useGratitudesStore().gratitudes
    }
  },

  data() {
    return {
      isVisibleCalendar: false,
      selectedDate: null
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisibleCalendar = !this.isVisibleCalendar
    },
    resetSelectedDay() {
      this.selectedDate = null
      this.isVisibleCalendar = false
    },

    getDankbarkeiten() {
      //1. Schritt - nach Datum sortieren. Hier ist danks ein Array
      let danks = Object.values(this.dankbarkeiten).sort(
        (dank1, dank2) => dank2.createdAt - dank1.createdAt
      )
      //2. Schritt - Dankbarkeiten nach Datum gruppieren und mit Datum als Key im Objekt speichern. Hier wird danks zum Object
      danks = this.splitSortedDankbarkeiten(danks)

      //3. Schritt - entweder Einen Tag mit dazugehörigen Dankbarkeiten herausgeben, oder alle.
      if (this.selectedDate != null) {
        let result = {}
        result[this.getDateWithoutTime(this.selectedDate)] =
          danks[this.getDateWithoutTime(this.selectedDate)]
        return result
      }
      return danks
    },

    splitSortedDankbarkeiten(danks) {
      let result = {}
      result[this.getDateWithoutTime(danks[0].createdAt)] = [danks[0]]

      for (let i = 1; i < danks.length; i++) {
        let dateWithoutTime = this.getDateWithoutTime(danks[i].createdAt)
        if (Object.keys(result).includes(dateWithoutTime)) {
          result[dateWithoutTime].push(danks[i])
        } else {
          result[dateWithoutTime] = [danks[i]]
        }
      }
      return result
    },
    getDateWithoutTime(dateString) {
      let date = new Date(dateString)
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
    }
  }
}
</script>
<style scoped>
/* antonio-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Antonio';
  font-style: normal;
  font-weight: 400;
  src: url('../../public/antonio-v19-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
h2 {
  font-family: 'Antonio';
  padding: 1rem;
  text-align: center;
}
.danklist {
  color: #4f65df;
  padding: 1rem;
  position: relative;
}
.overview {
  display: flex;
  justify-content: space-around;
}
.all-view-button {
  background-color: transparent;
  color: #81dee4;
  border: none;
  margin: 0;
  padding: 0;
}
.calendar-button {
  background-color: transparent;
  color: #81dee4;
  border: none;
  margin: 0;
  padding: 0;
}
.list {
  border-left: 2px #4f65df solid;
}
.calendar {
  position: absolute;
  top: 80px;
  left: 19px;
  z-index: 1;
}
.section {
  position: relative;
}
.datum {
  color: #81dee4;
  padding-left: 1rem;
  font-family: monospace;
}

.datum::before {
  content: ' ';
  position: absolute;
  left: -0.5rem;
  top: 0.18rem;
  width: 0.8rem;
  height: 0.8rem;
  background-color: #4f65df;
  border-radius: 50%;
}
</style>
