<template>
  <!-- List of gratitudes: today's gratitudes -->

  <ul>
    <li v-for="gratitude in gratitudesToday" :key="gratitude.id">
      <form
        :id="'one-of-todays-gratitudes-with-ID :' + gratitude.id"
        :name="'one-of-todays-gratitudes-with-ID :' + gratitude.id"
      >
        <label :for="'ID_' + gratitude.id">
          <textarea
            :value="gratitude.text"
            :placeholder="placeholderText"
            :id="'ID_' + gratitude.id"
            :name="singleNote"
            ref="textarea"
            @keydown.enter.exact.prevent="handleChangingGratitude($event, gratitude.id)"
          ></textarea>
          <!-- TODO: @blur fixen -->
          <!-- @blur="handleChangingGratitude($event, gratitude.id)" -->
        </label>
      </form>
    </li>
  </ul>
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
    ...mapStores(useGratitudesStore),
    gratitudesToday: function () {
      return this.gratitudesStore.gratitudes.filter((gratitude) => {
        const createdAt = new Date(gratitude.createdAt)
        const rightNow = new Date()
        return (
          createdAt.getDate() === rightNow.getDate() &&
          createdAt.getMonth() === rightNow.getMonth() &&
          createdAt.getFullYear() === rightNow.getFullYear()
        )
      })
    }
  },
  methods: {
    handleChangingGratitude(event, id) {
      const text = event.target.value
      const store = this.gratitudesStore
      if (text === '') {
        return store.deleteGratitude(id)
      } else {
        store.editGratitude(id, text)
        event.target.blur()
      }
    },
    resize(event) {
      const element = event.target
      element.style.height = 'auto'
      element.style.height = element.scrollHeight + 'px'
    }
  },
  mounted() {
    // get gratitudes from api
    this.gratitudesStore.getGratitudes()
    // resize textareas
    this.$nextTick(() => {
      const textarea = this.$refs.textarea
      if (textarea) {
        if (Array.isArray(textarea)) {
          textarea.forEach((textarea) => {
            this.resize({ target: textarea })
          })
        } else {
          this.resize({ target: textarea })
        }
      }
    })
  },
  updated() {
    this.$nextTick(() => {
      const textarea = this.$refs.textarea
      if (textarea) {
        if (Array.isArray(textarea)) {
          textarea.forEach((textarea) => {
            this.resize({ target: textarea })
          })
        } else {
          this.resize({ target: textarea })
        }
      }
    })
  }
}
</script>

<style scoped>
h2 {
  color: #5ce1e6;
  margin-top: 2rem;
  /* margin-left: 2.5rem; */
  margin-bottom: 1rem;
  font-family: 'Antonio';
  text-align: center;
}

ul {
  list-style-type: none;
  padding-left: 0;
  /* padding-left: 3.5rem;
  padding-top: 2rem; */
}

li {
  position: relative;
  margin-bottom: 1rem;
  /* padding-left: 1.5em; */
  /* margin-right: 2rem;
  left: 0.6rem; */
}

form::before {
  content: url(../../public/header-star-green.png);
  position: absolute;
  left: -10rem;
  top: -8.4rem;
  transform: scale(0.13);
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
