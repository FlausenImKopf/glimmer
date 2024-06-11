<template>
  <div class="row">
    <div v-if="star" class="wrapper-with-popup">
      <div class="image" @mouseover="popup = true" @mouseleave="popup = false">
        <div class="wrapper-for-line-and-star">
          <div
            class="line"
            :style="`--width: ${computedWidth}; --margin-left: ${computedMarginLeft}`"
          ></div>
          <img class="star" src="/public/header-star-red.png" />
        </div>
      </div>
      <MessagePopUp :show="popup" :message="anticipation.text" />
    </div>
  </div>
</template>

<script>
import MessagePopUp from './MessagePopUp.vue'

export default {
  components: {
    MessagePopUp
  },
  props: {
    anticipation: Object,
    currentDate: Date
  },
  watch: {
    currentDate() {
      this.render()
    }
  },
  created() {
    this.render()
  },

  data() {
    return {
      star: false,
      popup: false,
      computedWidth: '20px',
      computedMarginLeft: '2px'
    }
  },

  methods: {
    render() {
      if (Object.keys(this.anticipation).length == 0) {
        this.star = true
        this.computedWidth = '0'
        this.computedMarginLeft = '0'
        return
      }
      let createdAt = new Date(this.anticipation.createdAt)
      let finalDate = new Date(this.anticipation.date)
      let currentDate = this.currentDate
      let dayBefore = new Date(currentDate)
      dayBefore.setDate(dayBefore.getDate() - 1)
      let dayAfter = new Date(currentDate)
      dayAfter.setDate(dayAfter.getDate() + 1)

      if (this.dateIsEqual(createdAt, finalDate)) {
        if (this.dateIsEqual(finalDate, dayBefore)) {
          this.star = true
          this.computedWidth = '0'
          this.computedMarginLeft = '10px'
          return
        } else if (this.dateIsEqual(finalDate, currentDate)) {
          this.star = true
          this.computedWidth = '0'
          this.computedMarginLeft = '136px'
          return
        } else if (this.dateIsEqual(finalDate, dayAfter)) {
          this.star = true
          this.computedWidth = '0px'
          this.computedMarginLeft = '258px'
          return
        }
      }

      if (this.dateIsBigger(finalDate, dayAfter)) {
        if (this.dateIsSmaller(createdAt, dayBefore)) {
          this.star = true
          this.computedWidth = '320px'
          this.computedMarginLeft = '0'
          return
        } else if (this.dateIsEqual(createdAt, dayBefore)) {
          this.star = true
          this.computedWidth = '320px'
          this.computedMarginLeft = '35px'
          return
        } else if (this.dateIsEqual(createdAt, currentDate)) {
          this.star = true
          this.computedWidth = '300px'
          this.computedMarginLeft = '157px'
          return
        } else if (this.dateIsEqual(createdAt, dayAfter)) {
          this.star = true
          this.computedWidth = '30px'
          this.computedMarginLeft = '285px'
        }
      }

      if (this.dateIsEqual(finalDate, dayAfter)) {
        if (this.dateIsSmaller(createdAt, dayBefore)) {
          this.star = true
          this.computedWidth = '268px'
          this.computedMarginLeft = '0'
          return
        } else if (this.dateIsEqual(createdAt, dayBefore)) {
          this.star = true
          this.computedWidth = '233px'
          this.computedMarginLeft = '35px'
          return
        } else if (this.dateIsEqual(createdAt, currentDate)) {
          this.star = true
          this.computedWidth = '113px'
          this.computedMarginLeft = '157px'
          return
        }
      }

      if (this.dateIsEqual(finalDate, currentDate)) {
        if (this.dateIsSmaller(createdAt, dayBefore)) {
          this.star = true
          this.computedWidth = '130px'
          this.computedMarginLeft = '0'
          return
        } else if (this.dateIsEqual(createdAt, dayBefore)) {
          this.star = true
          this.computedWidth = '95px'
          this.computedMarginLeft = '35px'
          return
        }
      }
      if (this.dateIsEqual(finalDate, dayBefore) && this.dateIsSmaller(createdAt, dayBefore)) {
        this.star = true
        this.computedWidth = '12px'
        this.computedMarginLeft = '0'
        return
      }
    },
    dateIsEqual(firstDate, secondDate) {
      return (
        firstDate.getFullYear() == secondDate.getFullYear() &&
        firstDate.getMonth() == secondDate.getMonth() &&
        firstDate.getDate() == secondDate.getDate()
      )
    },
    dateIsSmaller(firstDate, secondDate) {
      if (firstDate.getFullYear() < secondDate.getFullYear()) {
        return true
      } else if (firstDate.getFullYear() == secondDate.getFullYear()) {
        if (firstDate.getMonth() < secondDate.getMonth()) {
          return true
        } else if (firstDate.getMonth() == secondDate.getMonth()) {
          if (firstDate.getDate() < secondDate.getDate()) {
            return true
          }
        }
      }
      return false
    },
    dateIsBigger(firstDate, secondDate) {
      return !this.dateIsSmaller(firstDate, secondDate) && !this.dateIsEqual(firstDate, secondDate)
    }
  }
}
</script>

<style scoped>
.row {
  _margin: 0;
  color: #ec635e;
  display: flex;
  align-items: center;
  height: 3rem;
  overflow: hidden;
  position: relative;
}
.star {
  width: 3rem;
  _margin-top: 0.8rem;
}
.line {
  --width: 100%;
  --margin-left: 10px;
  background-color: #ec635e;
  width: var(--width);
  padding: 2px;
  border-radius: 2px;
  margin-left: var(--margin-left);
}
.wrapper-with-popup {
  position: relative;
}
.wrapper-for-line-and-star {
  display: flex;
  align-items: center;
}
</style>
