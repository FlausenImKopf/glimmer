import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useGratitudesStore = defineStore('gratitudes', {
  state() {
    return {
      gratitudes: [
        {
          id: uuidv4(),
          text: 'Ich bin dankbar für die Zusammenarbeit mit Regina und freue mich schon total auf die Präsentation unserer App',
          createdAt: new Date(2024, 4, 23)
        },
        {
          id: uuidv4(),
          text: 'Ich bin dankbar für den Sonnenschein heute',
          createdAt: new Date(2024, 4, 22)
        },
        {
          id: uuidv4(),
          text: 'Ich bin dankbar fürs Frühstücken in der Morgensonne',
          createdAt: new Date(2024, 4, 23)
        }
      ]
    }
  },
  persist: true,
  actions: {
    async getGratitudes() {
      const response = await fetch('http://localhost:3000/gratitudes')
      const data = await response.json()
      this.gratitudes = data
    },
    addGratitude(text) {
      this.gratitudes.push({ text, id: uuidv4(), createdAt: new Date() })
    },
    editGratitude(id, text) {
      const toBeEdited = this.gratitudes.find((gratitude) => gratitude.id === id)
      toBeEdited.text = text
    },
    deleteGratitude(id) {
      const toBeDeleted = this.gratitudes.indexOf((gratitude) => gratitude.id === id)
      this.gratitudes.splice(toBeDeleted, 1)
    }
  }
})
