import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useGratitudesStore = defineStore('gratitudes', {
  state: () => ({
    /** @type {{ text: string, id: string, createdAt: Date}[]} */
    gratitudes: [
      {
        id: uuidv4(),
        text: 'Ich bin dankbar für die Zusammenarbeit mit Regina und freue mich schon total auf die Präsentation unserer App',
        createdAt: new Date(2024, 5, 23)
      },
      {
        id: uuidv4(),
        text: 'Ich bin dankbar für den Sonnenschein heute',
        createdAt: new Date(2024, 5, 22)
      },
      {
        id: uuidv4(),
        text: 'Ich bin dankbar fürs Frühstücken in der Morgensonne',
        createdAt: new Date(2024, 5, 23)
      }
    ]
  }),
  persist: true,
  actions: {
    addGratitude(text) {
      this.gratitudes.push({ text, id: uuidv4(), createdAt: new Date() })
    },
    editGratitude(id, text) {
      const toBeEdited = this.gratitudes.find((gratitude) => gratitude.id === id)
      toBeEdited.text = text
      console.log(toBeEdited)
    }
  }
})
