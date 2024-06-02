<template>
  <!-- List of Anticipations: today's anticipations -->
  <ul>
    <li v-for="anticipation in anticipationsToday" :key="anticipation.id">
      <section class="displays-each-anticipation-today">
        <div class="textarea-wrapper">
          <form
            :id="'one-of-todays-anticipations-with-ID :' + anticipation.id"
            :name="'one-of-todays-anticipations-with-ID :' + anticipation.id"
          >
            <label :for="'ID_' + anticipation.id">{{ cetDate(anticipation.date) }}</label>
            <textarea
              :value="anticipation.text"
              :placeholder="placeholderText"
              :id="'ID_' + anticipation.id"
              :name="singleNote"
              ref="textarea"
              @keydown.enter.exact.prevent="handleChangingAnticipation($event, anticipation.id)"
            >
                <!-- @blur="handleChangingAnticipation($event, anticipation.id)" -->
              </textarea
            >
          </form>
        </div>

        <!-- share and delete buttons -->
        <!-- <div class="btn-wrapper">
            <button class="share-btn">
              <svg
                width="32px"
                height="23px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z"
                    fill="#101C42"
                  ></path>
                </g>
              </svg>
            </button>
            <button @click="handleDeletingGratitude(gratitude.id, gratitude.text)" class="delete-btn">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    opacity="0.5"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    fill="#1C274C"
                  ></path>
                  <path
                    d="M15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z"
                    fill="#1C274C"
                  ></path>
                </g>
              </svg>
            </button>
          </div> -->
      </section>
    </li>
  </ul>
  <!-- Empty textarea for new anticipation: always displayed below the last entry -->
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
  <div v-if="!isVisibleButton && !isVisibleCalendar">
    <form id="add-new-anticipation-for-today-here" name="add-new-anticipation-for-today-here">
      <label for="add-new-anticipation-for-today-here">{{ datum }}</label>
      <textarea
        v-model="text"
        placeholder="Heute freue ich mich auf..."
        @input="resize($event)"
        @keydown.enter.exact.prevent="handleNewAnticipation()"
        @blur="handleNewAnticipation()"
      ></textarea>
    </form>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useAnticipationsStore } from '../stores/anticipations'

export default {
  data() {
    return {
      text: '',
      isVisibleCalendar: false,
      isVisibleButton: true,
      selectedDate: null,
      eachDate: ''
      // throttledEditAnticipation: null
    }
  },
  props: {
    singleNote: {
      type: String,
      required: true
    },
    placeholderText: {
      type: String
    }
  },
  computed: {
    ...mapStores(useAnticipationsStore),
    anticipationsToday: function () {
      return this.anticipationsStore.anticipations.filter((anticipation) => {
        const createdAt = new Date(anticipation.createdAt)
        const rightNow = new Date()
        return (
          createdAt.getDate() === rightNow.getDate() &&
          createdAt.getMonth() === rightNow.getMonth() &&
          createdAt.getFullYear() === rightNow.getFullYear()
        )
      })
    },
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
    cetDate(dateString) {
      const date = new Date(dateString)
      const options = {
        timeZone: 'Europe/Berlin',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
      return new Intl.DateTimeFormat('en-GB', options).format(date)
    },
    handleNewAnticipation() {
      if (this.text.length === 0) {
        return
      } else {
        const createdAt = Date.now()
        // TODO: add calendar functionality here:
        const date = this.selectedDate
        console.log(date)
        const userId = 'c2dfc86e-53da-4404-8acd-7497853b8496'
        this.anticipationsStore.addAnticipation(this.text, createdAt, date, userId)
        this.text = ''
        this.selectedDate = null
        this.toggleButton()
      }
    },

    handleChangingAnticipation(event, id) {
      const text = event.target.value
      const store = this.anticipationsStore
      if (text === '') {
        store.deleteAnticipation(id)
      } else {
        store.editAnticipation(id, text)
        event.target.blur()
      }
    },
    resize(event) {
      const element = event.target
      element.style.height = 'auto'
      element.style.height = element.scrollHeight + 'px'
    }
  },
  created() {
    //   this.throttledEditAnticipation = this.throttle(this.editAnticipation, 1000)
  },
  mounted() {
    // get anticipations from api
    this.anticipationsStore.getAnticipations()
    // resize textareas
    this.$nextTick(() => {
      const textarea = this.$refs.textarea
      if (textarea) {
        if (Array.isArray(textarea)) {
          textarea.forEach((textarea) => {
            this.resize({ target: textarea })
          })
        } else {
          this.resize({ target: textarea })
        }
      }
    })
  },
  updated() {
    this.$nextTick(() => {
      const textarea = this.$refs.textarea
      if (textarea) {
        if (Array.isArray(textarea)) {
          textarea.forEach((textarea) => {
            this.resize({ target: textarea })
          })
        } else {
          this.resize({ target: textarea })
        }
      }
    })
  }
}
</script>

<style scoped>
ul {
  color: white;
  list-style-type: none;
  padding-left: 3.5rem;
  padding-top: 2rem;
}

li {
  position: relative;
  padding-left: 1.5em;
  margin-bottom: 1em;
  margin-right: 2rem;
}

li::before {
  content: ' ';
  position: absolute;
  left: -0rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  background-color: #5ce1e6;
  border-radius: 50%;
}

textarea {
  background-color: darkblue;
  padding-top: 1rem;
  color: white;
  width: 200px;
  min-height: 10px;
  padding: 2px;
  resize: none;
  overflow: hidden;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  /* border: 2px solid white; */
}

div {
  color: white;
}

.calendar-button {
  background-color: transparent;
  color: #81dee4;
  border: none;
  /* margin: 0; */
  margin-left: 3rem;
  padding: 0;
}

.calender-button-wrapper {
  color: white;
  display: flex;
}

p {
  padding-left: 1rem;
}
.calendar {
  position: absolute;
  left: 2rem;
  z-index: 1;
}

.calendar-wrapper {
  position: relative;
}

#add-new-anticipation-for-today-here {
  margin-left: 5rem;
}
/* section {
    display: flex;
    justify-content: space-between;
  } */

/* .btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  } */

/* button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
  } */
</style>
