<template>
  <!-- List of gratitude: today's gratitudes -->
  <ul>
    <li v-for="gratitude in gratitudesToday" :key="gratitude.id">
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
            @input="(event) => handleEditingGratitude(gratitude.id, event.target.value)"
            @blur="handleDeletingGratitude(gratitude.id, gratitude.text)"
          ></textarea>
        </label>
      </form>
    </li>
    <!-- Empty textarea for new gratitude: always displayed below the last entry -->
    <li>
      <form id="add-new-gratitude-for-today-here" name="add-new-gratitude-for-today-here">
        <label>
          <textarea
            v-model="text"
            placeholder="Heute bin ich dankbar für..."
            @input="resize($event)"
            @keydown.enter.exact.prevent="handleNewGratitude()"
            @blur="handleNewGratitude()"
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
    return {
      text: ''
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
        this.gratitudesStore.addGratitude(this.text)
        this.text = ''
      }
    },
    handleEditingGratitude(id, text) {
      this.gratitudesStore.editGratitude(id, text)
    },
    handleDeletingGratitude(id, text) {
      const store = this.gratitudesStore
      if (text === '') {
        store.deleteGratitude(id)
      } else {
        return
      }
    },
    resize(event) {
      const element = event.target
      element.style.height = 'auto'
      element.style.height = element.scrollHeight + 'px'
    }
  },
  mounted() {
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
  },
  updated() {
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
ul {
  color: white;
  list-style-type: none;
  padding-left: 0;
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
  left: 15.57rem;
  top: 0.1rem;
  width: 0.8rem;
  height: 0.8rem;
  background-color: #5ce1e6;
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
