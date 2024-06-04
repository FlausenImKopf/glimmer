<template>
  <!-- List of Anticipations: today's anticipations -->
  <ul>
    <li v-for="anticipation in anticipationsToday" :key="anticipation.id">
      <div class="textarea-wrapper">
        <form
          :id="'one-of-todays-anticipations-with-ID :' + anticipation.id"
          :name="'one-of-todays-anticipations-with-ID :' + anticipation.id"
        >
          <label :for="'ID_' + anticipation.id">{{ cetDate(anticipation.date) }}</label>
          <textarea
            class="li-textarea"
            :value="anticipation.text"
            :placeholder="placeholderText"
            :id="'ID_' + anticipation.id"
            :name="singleNote"
            ref="textarea"
            @input="resize"
            @keydown.enter.exact.prevent="handleChangingAnticipation($event, anticipation.id)"
          >
                <!-- @blur="handleChangingAnticipation($event, anticipation.id)" -->
              </textarea
          >
        </form>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapStores } from 'pinia'
import { useAnticipationsStore } from '../../stores/anticipations'

export default {
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
    }
  },
  methods: {
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
  list-style-type: none;
  padding-left: 0;
}

li {
  position: relative;
  margin-bottom: 1.5rem;
}

label {
  color: #ec635e;
  background-color: rgb(236, 99, 94, 0.2);
  font-family: monospace;
  border-radius: 4px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.05rem;
  padding-bottom: 0.05rem;
}

li::before {
  content: url(../../public/header-star-red.png);
  position: absolute;
  left: -10rem;
  top: -9rem;
  transform: scale(0.13);
}

.li-textarea {
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

::placeholder {
  color: rgba(236, 99, 94, 0.4);
}
</style>
