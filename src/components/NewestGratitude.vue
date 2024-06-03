<template>
  <ul>
    <li v-for="gratitude in gratitudesToday.slice(-1)" :key="gratitude.id">
      <form
        :id="'show-one-of-todays-gratitudes-with-ID: ' + gratitude.id"
        :name="'show-one-of-todays-gratitudes-with-ID :' + gratitude.id"
      >
        <!-- TODO: keine headlines in form-Elementen wegen accessibility -->
        <h2>Dankbarkeit</h2>
        <label :for="'ID_' + gratitude.id">
          <textarea
            :value="gratitude.text"
            placeholder="Heute bin ich dankbar für..."
            :id="'ID_' + gratitude.id"
            ref="textarea"
            @click="$router.push('/dankbarkeiten')"
          ></textarea>
        </label>
      </form>
    </li>
    <!-- Empty textarea for new gratitude: only visible if no gratitudes have been written yet on any given day -->
    <li v-if="noGratitudesYet">
      <form id="add-new-gratitude-for-today" name="add-new-gratitude-for-today">
        <label>
          <textarea
            placeholder="Heute bin ich dankbar für..."
            @click="$router.push('/dankbarkeiten')"
          ></textarea>
        </label>
      </form>
    </li>
  </ul>
</template>

<script>
import { mapStores } from 'pinia'
import { useGratitudesStore } from '../stores/gratitudes'

export default {
  data() {
    return {}
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
    },
    noGratitudesYet() {
      return this.gratitudesToday.length === 0
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
  margin-left: 1.6rem;
}

li {
  position: relative;
  margin-bottom: 1em;
  left: 1.75rem;
  right: 1.75rem;
}

h2 {
  margin-bottom: 0.2rem;
  color: #5ce1e6;
}

form::before {
  content: url(../../public/header-star-green.png);
  position: absolute;
  left: -11.5rem;
  top: -6.1rem;
  transform: scale(0.13);
}

textarea {
  color: #4f65df;
  min-height: 10px;
  padding: 2px;
  resize: none;
  overflow: hidden;
  background-color: transparent;
  border: none;
  border-radius: 4px;
}
</style>

<!-- TODO: besseres Layout der Textfelder -->
