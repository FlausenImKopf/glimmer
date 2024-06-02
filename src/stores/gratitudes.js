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
    getGratitudes() {
      fetch('http://localhost:3000/gratitudes')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          return response.json()
        })
        .then((data) => {
          this.gratitudes = data
        })
        .catch((error) => {
          console.error('Failed to fetch gratitudes:', error)
        })
    },
    addGratitude(text, createdAt, userId) {
      const newGratitude = {
        text: text,
        createdAt: createdAt,
        userId: userId
      }
      fetch('http://localhost:3000/gratitudes', {
        method: 'POST',
        body: JSON.stringify(newGratitude),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          return response.json()
        })
        .then(() => {
          this.getGratitudes()
        })
        .catch((error) => {
          console.error('Failed to add gratitude:', error)
        })
      // this.gratitudes.push({ text, createdAt, userId })
    },
    editGratitude(id, text) {
      const toBeEdited = this.gratitudes.find((gratitude) => gratitude.id === id)
      toBeEdited.text = text
    },
    deleteGratitude(id) {
      fetch(`http://localhost:3000/gratitudes/${id}`, {
        method: 'DELETE'
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          return response.json()
        })
        .then(() => {
          this.getGratitudes()
        })
        .catch((error) => {
          console.error('Failed to delete gratitude:', error)
        })
      // const toBeDeleted = this.gratitudes.indexOf((gratitude) => gratitude.id === id)
      // this.gratitudes.splice(toBeDeleted, 1)
    }
  }
})
