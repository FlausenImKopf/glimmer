<template>
  <header>
    <div class="timeline-view-links">
      <button @click="$router.push('/danktimeline')">Dankbarkeiten</button>
      <button @click="$router.push('/freudetimeline')">Vorfreuden</button>
      <button>Gewohnheiten</button>
    </div>
  </header>
  <main>
    <!-- List of today's gratitudes -->
    <ul>
      <li v-for="gratitude in gratitudesToday" :key="gratitude.id">
        <form
          :id="'show-one-of-todays-gratitudes-with-ID: ' + gratitude.id"
          :name="'show-one-of-todays-gratitudes-with-ID :' + gratitude.id"
        >
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
  </main>
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
      if (Array.isArray(textarea)) {
        textarea.forEach((textarea) => {
          this.resize({ target: textarea })
        })
      } else {
        this.resize({ target: textarea })
      }
    })
  }
}
</script>

<style scoped>
.timeline-view-links {
  display: flex;
}
main {
  border-left: 2px Cornflowerblue solid;
}

ul {
  color: white;
  list-style-type: none;
  padding-left: 0;
}

li {
  position: relative;
  padding-left: 1.5em;
  margin-bottom: 1em;
}

li::before {
  /* content: '*';
  counter-increment: item;
  position: absolute;
  left: 0;
  top: 0.3em; */
  content: ' ';
  position: absolute;
  left: -0.45rem;

  width: 0.8rem;
  height: 0.8rem;
  background-color: Cornflowerblue;
  border-radius: 50%;
}

textarea {
  background-color: darkblue;
  color: white;
  width: 200px;
  min-height: 10px;
  padding: 2px;
  resize: none;
  overflow: hidden;
  background-color: transparent;
  border: none;
  border-radius: 4px;
}
</style>
