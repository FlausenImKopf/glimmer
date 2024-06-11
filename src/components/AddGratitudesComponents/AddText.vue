<template>
  <!-- Empty textarea for new gratitude: always displayed below the last entry -->
  <form id="add-new-gratitude-for-today-here" name="add-new-gratitude-for-today-here">
    <label>
      <textarea
        v-model="text"
        placeholder="Hier die Dankbarkeit eingeben und mit Enter speichern"
        @input="resize($event)"
        @keydown.enter.exact.prevent="handleNewGratitude"
        @blur="handleNewGratitude"
      ></textarea>
    </label>
  </form>
</template>

<script>
import { mapStores } from 'pinia'
import { useGratitudesStore } from '../../stores/gratitudes'

export default {
  data() {
    return {
      text: ''
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
        const createdAt = Date.now()
        const userId = 'c2dfc86e-53da-4404-8acd-7497853b8496'
        this.gratitudesStore.addGratitude(this.text, createdAt, userId)
        this.text = ''
      }
    },
    resize(event) {
      const element = event.target
      element.style.height = 'auto'
      element.style.height = element.scrollHeight + 'px'
    }
  },
  mounted() {
    this.gratitudesStore.getGratitudes()
  }
}
</script>

<style scoped>
#add-new-gratitude-for-today-here {
  position: relative;
  /* left: -1rem;
  margin-left: 5.1rem; */
}

textarea {
  color: #5ce1e6;
  background-color: rgba(92, 225, 230, 0.1);
  min-height: 5rem;
  width: 100%;
  padding: 1rem;
  resize: none;
  overflow: hidden;
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

::placeholder {
  color: rgba(92, 225, 230, 0.4);
}
</style>
