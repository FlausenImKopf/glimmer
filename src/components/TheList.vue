<template>
  <ul>
    <li v-for="gratitude in gratitudesStore.gratitudes" :key="gratitude.id">
      <form>
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
          <!-- <button >speichern</button> -->
        </label>
      </form>
    </li>
    <!-- Empty textarea for new gratitude -->
    <li>
      <form>
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
    ...mapStores(useGratitudesStore)
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
      this.$refs.textarea.forEach((textarea) => {
        this.resize({ target: textarea })
      })
    })
  },
  updated() {
    this.$nextTick(() => {
      this.$refs.textarea.forEach((textarea) => {
        this.resize({ target: textarea })
      })
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
}

li::before {
  content: '*';
  counter-increment: item;
  position: absolute;
  left: 0;
  top: 0.3em;
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
