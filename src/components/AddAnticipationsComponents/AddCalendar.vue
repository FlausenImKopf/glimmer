<template>
  <!-- Calendar: -->
  <div class="add-anticipation-wrapper">
    <div class="calender-button-wrapper" v-if="isVisibleButton">
      <button class="calendar-button" @click="toggleBoth">
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
      <p>
        Wähle den Tag aus, <br />
        auf den du dich freust
      </p>
    </div>
    <div class="calendar-wrapper" v-if="isVisibleCalendar">
      <div class="calendar">
        <VDatePicker v-model="selectedDate" mode="selectedDate" @dayclick="toggleVisibility()" />
      </div>
    </div>
    <!-- Empty textarea for new anticipation: displayed below the last entry when a date is picked-->
    <div v-if="!isVisibleButton && !isVisibleCalendar">
      <form id="add-new-anticipation-for-today-here" name="add-new-anticipation-for-today-here">
        <label for="add-new-anticipation-for-today-here">{{ datum }}</label>
        <textarea
          class="new-textarea"
          v-model="text"
          :placeholder="placeholderText"
          @input="resize($event)"
          @keydown.enter.exact.prevent="handleNewAnticipation()"
          @blur="handleNewAnticipation()"
        ></textarea>
      </form>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useAnticipationsStore } from '../../stores/anticipations'

export default {
  data() {
    return {
      text: '',
      isVisibleCalendar: false,
      isVisibleButton: true,
      selectedDate: null
    }
  },
  props: {
    placeholderText: {
      type: String
    }
  },
  computed: {
    ...mapStores(useAnticipationsStore),
    datum() {
      const date = this.selectedDate
      if (date !== null) {
        // Create a Date object from the selectedDate
        const dateObj = new Date(date)

        // Options for formatting the date
        const options = {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }

        // Format the date using Intl.DateTimeFormat
        return new Intl.DateTimeFormat('en-GB', options).format(dateObj)
      } else {
        return ''
      }
    }
  },
  methods: {
    toggleVisibility() {
      console.log(this.selectedDate)
      this.isVisibleCalendar = !this.isVisibleCalendar
    },
    toggleButton() {
      this.isVisibleButton = !this.isVisibleButton
    },
    toggleBoth() {
      this.toggleButton()
      this.toggleVisibility()
    },
    handleNewAnticipation() {
      if (this.text.length === 0) {
        return
      } else {
        const createdAt = Date.now()
        const date = this.selectedDate
        console.log(date)
        const userId = 'c2dfc86e-53da-4404-8acd-7497853b8496'
        this.anticipationsStore.addAnticipation(this.text, createdAt, date, userId)
        this.text = ''
        this.selectedDate = null
        this.toggleButton()
      }
    },
    resize(event) {
      const element = event.target
      element.style.height = 'auto'
      element.style.height = element.scrollHeight + 'px'
    }
  },
  mounted() {
    // get anticipations from api
    this.anticipationsStore.getAnticipations()
  }
}
</script>

<style scoped>
label {
  color: #ec635e;
  background-color: rgb(236, 99, 94, 0.2);
  border-radius: 4px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.05rem;
  padding-bottom: 0.05rem;
  font-family: monospace;
}

.new-textarea {
  color: #ec635e;
  background-color: rgba(236, 99, 94, 0.1);
  min-height: 5rem;
  width: 100%;
  padding: 1rem;
  resize: none;
  overflow: hidden;
  border: none;
  border-radius: 4px;
  box-shadow: 0px -25px 0px 0px rgba(236, 99, 94, 0.1);
  /* margin-bottom: 2rem; */
  left: -1rem;
  /* position: relative; */
  /* border: 2px solid white; */
  /* font-family: monospace; */
}
textarea:hover {
  background-color: rgba(236, 99, 94, 0.4);
  box-shadow: 0px -25px 0px 0px rgba(236, 99, 94, 0.4);
}

textarea:focus {
  background-color: rgba(236, 99, 94, 0.4);
  box-shadow: 0px -25px 0px 0px rgba(236, 99, 94, 0.4);
  border: none;
  outline: none;
}

.add-anticipation-wrapper {
  display: flex;
  justify-content: center;
}

.calender-button-wrapper {
  color: #ec635e;
  background-color: rgba(236, 99, 94, 0.1);
  box-shadow: 0px -10px 0px 0px rgba(236, 99, 94, 0.1);
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  border-radius: 4px;
}

.calender-button-wrapper:hover {
  background-color: rgba(236, 99, 94, 0.4);
  box-shadow: 0px -10px 0px 0px rgba(236, 99, 94, 0.4);
}

.calender-button-wrapper:focus {
  background-color: rgba(236, 99, 94, 0.4);
}

.calendar-button {
  background-color: transparent;
  color: #ec635e;
  border: none;
  padding: 0;
}

p {
  padding-left: 1rem;
  font-family: monospace;
}
.calendar {
  position: absolute;
  left: -8rem;
  z-index: 1;
}

.calendar-wrapper {
  position: relative;
}

::placeholder {
  color: rgba(236, 99, 94, 0.4);
}
</style>
