<template>
  <!-- List of gratitudes: today's gratitudes -->
  <h2>Meine Dankbarkeiten heute</h2>
  <ul>
    <li v-for="gratitude in gratitudesToday" :key="gratitude.id">
      <section class="displays-each-gratitude-today">
        <div class="textarea-wrapper">
          <form
            :id="'one-of-todays-gratitudes-with-ID :' + gratitude.id"
            :name="'one-of-todays-gratitudes-with-ID :' + gratitude.id"
          >
            <label :for="'ID_' + gratitude.id">
              <textarea
                :value="gratitude.text"
                :placeholder="placeholderText"
                :id="'ID_' + gratitude.id"
                :name="singleNote"
                ref="textarea"
                @keydown.enter.exact.prevent="handleChangingGratitude($event, gratitude.id)"
              ></textarea>
              <!-- TODO: @blur fixen -->
              <!-- @blur="handleChangingGratitude($event, gratitude.id)" -->
            </label>
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
  <!-- Empty textarea for new gratitude: always displayed below the last entry -->
  <form id="add-new-gratitude-for-today-here" name="add-new-gratitude-for-today-here">
    <label>
      <textarea
        v-model="text"
        placeholder="Hier die Dankbarkeit eingeben und mit Enter speichern"
        @input="resize($event)"
        @keydown.enter.exact.prevent="handleNewGratitude()"
        @blur="handleNewGratitude()"
      ></textarea>
    </label>
  </form>
</template>

<script>
import { mapStores } from 'pinia'
import { useGratitudesStore } from '../stores/gratitudes'

export default {
  data() {
    return {
      text: '',
      throttledEditGratitude: null
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
    ...mapStores(useGratitudesStore),
    gratitudesToday: function () {
      return this.gratitudesStore.gratitudes.filter((gratitude) => {
        const createdAt = new Date(gratitude.createdAt)
        const rightNow = new Date()
        return (
          createdAt.getDate() === rightNow.getDate() &&
          createdAt.getMonth() === rightNow.getMonth() &&
          createdAt.getFullYear() === rightNow.getFullYear()
        )
      })
    }
  },
  methods: {
    handleNewGratitude() {
      if (this.text.length === 0) {
        return
      } else {
        const createdAt = Date.now()
        const userId = 'c2dfc86e-53da-4404-8acd-7497853b8496'
        this.gratitudesStore.addGratitude(this.text, createdAt, userId)
        this.text = ''
      }
    },
    // throttle(func, limit) {
    //   let inThrottle
    //   return function () {
    //     const context = this
    //     const args = arguments
    //     if (!inThrottle) {
    //       func.apply(context, args)
    //       inThrottle = true
    //       setTimeout(() => (inThrottle = false), limit)
    //     }
    //   }
    // },
    // editGratitude(id, text) {
    //   this.gratitudesStore.editGratitude(id, text)
    // },
    // handleEditingGratitude(id, text) {
    //   this.throttledEditGratitude(id, text)
    // },
    // handleDeletingGratitude(id, text) {
    //   const store = this.gratitudesStore
    //   if (text === '') {
    //     store.deleteGratitude(id)
    //   } else {
    //     return
    //   }
    // },
    handleChangingGratitude(event, id) {
      const text = event.target.value
      const store = this.gratitudesStore
      if (text === '') {
        return store.deleteGratitude(id)
      } else {
        store.editGratitude(id, text)
        event.target.blur()
      }
    },
    resize(event) {
      const element = event.target
      element.style.height = 'auto'
      element.style.height = element.scrollHeight + 'px'
    }
  },
  mounted() {
    // get gratitudes from api
    this.gratitudesStore.getGratitudes()
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
/* antonio-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Antonio';
  font-style: normal;
  font-weight: 400;
  src: url('../../public/antonio-v19-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

h2 {
  color: #5ce1e6;
  margin-top: 2rem;
  margin-left: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Antonio';
}

ul {
  color: white;
  list-style-type: none;
  padding-left: 3.5rem;
  padding-top: 2rem;
}

li {
  position: relative;
  /* padding-left: 1.5em; */
  margin-bottom: 1rem;
  margin-right: 2rem;
  left: 0.6rem;
}

form::before {
  content: url(../../public/header-star-green.png);
  position: absolute;
  left: -10rem;
  top: -8.4rem;
  transform: scale(0.13);
}
#add-new-gratitude-for-today-here {
  position: relative;
  left: -1rem;
}

#add-new-gratitude-for-today-here::before {
  content: none;
}

textarea {
  color: #5ce1e6;
  min-height: 5rem;
  padding: 1rem;
  resize: none;
  overflow: hidden;
  background-color: rgba(92, 225, 230, 0.1);
  border: none;
  border-radius: 4px;
}

textarea:hover {
  background-color: rgba(92, 225, 230, 0.4);
}

textarea:focus {
  background-color: rgba(92, 225, 230, 0.4);
  border: none;
  outline: none;
}

#add-new-gratitude-for-today-here {
  margin-left: 5.1rem;
}

::placeholder {
  color: rgba(92, 225, 230, 0.4);
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
