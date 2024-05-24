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
            @input="resize($event)"
          ></textarea>
          <button @click.prevent="handleNewNote">speichern</button>
        </label>
      </form>
    </li>
  </ul>
</template>

<script>
import { mapStores } from 'pinia'
import { useGratitudesStore } from '../stores/gratitudes'

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
    ...mapStores(useGratitudesStore)
  },
  methods: {
    handleNewNote() {
      // if (this.newDescription.length === 0) {
      //   return
      // } else {
      //   const newNote = {
      //     description: this.newNote,
      //     id: Math.floor(Math.random() * 543),
      //     tags: []
      //   }
      //   this.notes.push(newNote)
      //   this.newNote = ''
      //   console.log(this.notes)
      // }
    },
    resize(event) {
      const element = event.target
      element.style.height = 'auto'
      element.style.height = element.scrollHeight + 'px'
    }
  },
  mounted() {
    this.$refs.textarea.forEach((textarea) => {
      this.resize({ target: textarea })
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
