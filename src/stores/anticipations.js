import { defineStore } from 'pinia'

export const useAnticipationsStore = defineStore('anticipations', {
  state() {
    return {
      anticipations: [
        {
          text: 'Ich freue mich total auf all die Sonnenblumen, die ich ausgesäht habe!',
          createdAt: 1717318812059,
          date: 'Mon May 27 2024 09:51:20 GMT+0200 (Central European Summer Time)',
          id: 'f9b794b4-560e-4043-83c7-fbe5f4fed1e3',
          userId: 'c2dfc86e-53da-4404-8acd-7497853b8496'
        }
      ]
    }
  },
  persist: true,
  actions: {
    getAnticipations() {
      fetch('http://localhost:3000/anticipations')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          return response.json()
        })
        .then((data) => {
          this.anticipations = data
        })
        .catch((error) => {
          console.error('Failed to fetch anticipations:', error)
        })
    },
    addAnticipation(text, createdAt, date, userId) {
      const newAnticipation = {
        text: text,
        createdAt: createdAt,
        date: date,
        userId: userId
      }
      fetch('http://localhost:3000/anticipations', {
        method: 'POST',
        body: JSON.stringify(newAnticipation),
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
          this.getAnticipations()
        })
        .catch((error) => {
          console.error('Failed to add anticipation:', error)
        })
      // this.anticipations.push({ text, createdAt, userId })
    },
    editAnticipation(id, text) {
      fetch(`http://localhost:3000/anticipations/${id}`, {
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
          this.getAnticipations()
        })
        .catch((error) => {
          console.error('Failed to edit anticipations:', error)
        })

      // const toBeEdited = this.anticipations.find((anticipation) => anticipation.id === id)
      // toBeEdited.text = text
    },
    deleteAnticipation(id) {
      fetch(`http://localhost:3000/anticipations/${id}`, {
        method: 'DELETE'
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          return response.json()
        })
        .then(() => {
          this.getAnticipations()
        })
        .catch((error) => {
          console.error('Failed to delete anticipation:', error)
        })
      // const toBeDeleted = this.anticipations.indexOf((anticipation) => anticipation.id === id)
      // this.anticipations.splice(toBeDeleted, 1)
    }
  }
})
