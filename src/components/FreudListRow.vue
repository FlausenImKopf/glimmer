<template>
  <div class="row">
    <div v-if="star" class="wrapper-with-popup">
      <div class="image" @mouseover="popup = true" @mouseleave="popup = false">
        <div class="wrapper-for-line-and-star">
          <div
            class="line"
            :style="`--width: ${computedWidth}; --margin-left: ${computedMarginLeft}`"
          ></div>
          <img class="star" src="../../public/header-star-red.png" />
        </div>
      </div>
      <MessagePopUp :show="popup" :message="vorfreude.text" />
    </div>
  </div>
</template>

<script>
import MessagePopUp from '../components/MessagePopUp.vue'

export default {
  components: {
    MessagePopUp
  },
  props: {
    vorfreude: Object,
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
      if (Object.keys(this.vorfreude).length == 0) {
        this.star = true
        this.computedWidth = '0'
        this.computedMarginLeft = '0'
        return
      }
      let createdAt = this.vorfreude.createdAt
      let enddatum = this.vorfreude.date
      let currentDate = this.currentDate
      let vortag = new Date(currentDate)
      vortag.setDate(vortag.getDate() - 1)
      let folgetag = new Date(currentDate)
      folgetag.setDate(folgetag.getDate() + 1)

      if (this.istGleich(createdAt, enddatum)) {
        if (this.istGleich(enddatum, vortag)) {
          this.star = true
          this.computedWidth = '0'
          this.computedMarginLeft = '10px'
          return
        } else if (this.istGleich(enddatum, currentDate)) {
          this.star = true
          this.computedWidth = '0'
          this.computedMarginLeft = '136px'
          return
        } else if (this.istGleich(enddatum, folgetag)) {
          this.star = true
          this.computedWidth = '0px'
          this.computedMarginLeft = '258px'
          return
        }
      }

      if (this.istGroesser(enddatum, folgetag)) {
        if (this.istKleiner(createdAt, vortag)) {
          this.star = true
          this.computedWidth = '320px'
          this.computedMarginLeft = '0'
          return
        } else if (this.istGleich(createdAt, vortag)) {
          this.star = true
          this.computedWidth = '320px'
          this.computedMarginLeft = '35px'
          return
        } else if (this.istGleich(createdAt, currentDate)) {
          this.star = true
          this.computedWidth = '300px'
          this.computedMarginLeft = '157px'
          return
        } else if (this.istGleich(createdAt, folgetag)) {
          this.star = true
          this.computedWidth = '30px'
          this.computedMarginLeft = '285px'
        }
      }

      if (this.istGleich(enddatum, folgetag)) {
        if (this.istKleiner(createdAt, vortag)) {
          this.star = true
          this.computedWidth = '268px'
          this.computedMarginLeft = '0'
          return
        } else if (this.istGleich(createdAt, vortag)) {
          this.star = true
          this.computedWidth = '233px'
          this.computedMarginLeft = '35px'
          return
        } else if (this.istGleich(createdAt, currentDate)) {
          this.star = true
          this.computedWidth = '113px'
          this.computedMarginLeft = '157px'
          return
        }
      }

      if (this.istGleich(enddatum, currentDate)) {
        if (this.istKleiner(createdAt, vortag)) {
          this.star = true
          this.computedWidth = '130px'
          this.computedMarginLeft = '0'
          return
        } else if (this.istGleich(createdAt, vortag)) {
          this.star = true
          this.computedWidth = '95px'
          this.computedMarginLeft = '35px'
          return
        }
      }
      if (this.istGleich(enddatum, vortag) && this.istKleiner(createdAt, vortag)) {
        this.star = true
        this.computedWidth = '12px'
        this.computedMarginLeft = '0'
        return
      }
    },
    istGleich(firstDate, secondDate) {
      return (
        firstDate.getFullYear() == secondDate.getFullYear() &&
        firstDate.getMonth() == secondDate.getMonth() &&
        firstDate.getDate() == secondDate.getDate()
      )
    },
    istKleiner(firstDate, secondDate) {
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
    istGroesser(firstDate, secondDate) {
      return !this.istKleiner(firstDate, secondDate) && !this.istGleich(firstDate, secondDate)
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
