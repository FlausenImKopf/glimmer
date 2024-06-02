import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useGratitudesStore = defineStore('gratitudes', {
  state() {
    return {
      gratitudes: [
        {
          text: 'Ich bin dankbar für die Zusammenarbeit mit Regina und freue mich schon total auf die Präsentation unserer App',
          createdAt: 1717318812058,
          userId: 'c2dfc86e-53da-4404-8acd-7497853b8496',
          id: 'f9b794b4-560e-4043-83c7-fbe5f4fed1f3'
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
      fetch(`http://localhost:3000/gratitudes/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ text: text }),
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
        .then((data) => {
          data.text = text
          this.getGratitudes()
        })
        .catch((error) => {
          console.error('Failed to edit gratitude:', error)
        })

      // const toBeEdited = this.gratitudes.find((gratitude) => gratitude.id === id)
      // toBeEdited.text = text
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
