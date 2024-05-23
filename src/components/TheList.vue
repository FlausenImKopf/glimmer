<template>
  <form id="add-anticipation">
    <input type="text" :placeholder="placeholderText" v-model="newNote" />
    <button @click.prevent="handleNewNote">speichern</button>
  </form>
  <ul>
    <li>
      <form>
        <label :for="singleNote">
          <input :id="singleNote" type="checkbox" :name="singleNote" />
          <span>{{ exampleCheckboxText }}</span>
          <button>teilen</button>
        </label>
      </form>
    </li>
  </ul>
</template>

<!-- hier mit props die Texte erwarten lassen. -->
<script>
export default {
  data() {
    return {
      notes: [
        {
          id: 1,
          description: 'Ich bin dankbar für die Zusammenarbeit mit Regina',
          tags: ['work buddies']
        },
        {
          id: 2,
          description: 'Ich bin dankbar für den Sonnenschein heute',
          tags: ['sunshine']
        }
      ],
      newNote: ''
    }
  },
  props: {
    exampleCheckboxText: {
      type: String,
      required: true
    },
    singleNote: {
      type: String,
      required: true
    },
    placeholderText: {
      type: String
    }
  },
  methods: {
    handleNewNote() {
      if (this.newNote.length === 0) {
        return
      } else {
        const newNote = {
          description: this.newNote,
          id: Math.floor(Math.random() * 543),
          tags: []
        }
        this.notes.push(newNote)
        this.newNote = ''
        console.log(this.notes)
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
</style>

if (data.length === 0) return const newTodo = { description: data, id: Math.floor(Math.random() *
1000), done: false } this.todos.push(newTodo)
