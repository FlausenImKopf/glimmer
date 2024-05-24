import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGratitudesStore = defineStore('gratitudes', {
  state: () => ({
    /** {{ text: string, id: number, createdAt: Date}[]} */
    gratitudes: [
      {
        id: 1,
        text: 'Ich bin dankbar für die Zusammenarbeit mit Regina und freue mich schon total auf die Präsentation unserer App',
        createdAt: new Date(2024, 5, 23)
      },
      {
        id: 2,
        text: 'Ich bin dankbar für den Sonnenschein heute',
        createdAt: new Date(2024, 5, 22)
      },
      {
        id: 3,
        text: 'Ich bin dankbar für die Pinia-Integration und dass sie schon funktinoiert, obwohl ich sie noch nicht ganz verstehe',
        createdAt: new Date(2024, 5, 23)
      }
    ]
  })
})
