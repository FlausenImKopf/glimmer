<template>
  <ul>
    <li v-for="anticipation in anticipationsToday.slice(-1)" :key="anticipation.id">
      <form
        :id="'show-one-of-todays-anticipations-with-ID: ' + anticipation.id"
        :name="'show-one-of-todays-anticipations-with-ID :' + anticipation.id"
      >
        <label :for="'ID_' + anticipation.id">
          <textarea
            :value="anticipation.text"
            placeholder="Ich freue mich auf..."
            :id="'ID_' + anticipation.id"
            ref="textarea"
            @click="$router.push('/anticipations')"
          ></textarea>
        </label>
      </form>
    </li>
    <!-- Empty textarea for new anticipation: only visible if no anticipations have been written yet on any given day -->
    <li v-if="noAnticipationsYet">
      <form id="add-new-anticipation-for-today" name="add-new-anticipation-for-today">
        <label>
          <textarea
            placeholder="Heute freue ich mich auf..."
            @click="$router.push('/vorfreuden')"
          ></textarea>
        </label>
      </form>
    </li>
  </ul>
</template>

<script>
import { mapStores } from 'pinia'
import { useAnticipationsStore } from '../../stores/anticipations'

export default {
  data() {
    return {}
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
    noAnticipationsYet() {
      return this.anticipationsToday.length === 0
    }
  },
  methods: {
    resize(event) {
      const element = event.target
      element.style.height = 'auto'
      element.style.height = element.scrollHeight + 'px'
    }
  },
  mounted() {
    // Adjusts textarea-sizing when the app is mounted
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
.timeline-view-links {
  display: flex;
}

ul {
  color: #4f65df;
  list-style-type: none;
  padding-left: 0;
  /* margin-left: 1.6rem; */
}

li {
  position: relative;
  margin-bottom: 1em;
}

/* h2 {
  margin-bottom: 0.2rem;
  color: #ec635e;
} */

form::before {
  content: url(../../public/header-star-red.png);
  position: absolute;
  left: -10rem;
  top: -8.4rem;
  transform: scale(0.13);
}

textarea {
  color: #ec635e;
  background-color: rgba(236, 99, 94, 0.1);
  min-height: 10px;
  width: 100%;
  /* padding: 2px; */
  resize: none;
  overflow: hidden;
  border: none;
  border-radius: 5px;
  padding: 1rem;
}

textarea:hover {
  background-color: rgba(236, 99, 94, 0.4);
}

::placeholder {
  color: rgba(236, 99, 94, 0.4);
}
</style>
