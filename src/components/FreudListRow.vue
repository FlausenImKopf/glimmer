<template>
  <div class="row">
    <span class="abstand">{{ abstand }}</span>
    {{}}
    <div class="wrapper">
      <div class="image" @mouseover="popup = true" @mouseleave="popup = false">
        <div class="line"></div>
        <img v-if="true" class="star" src="../../public/header-star-red.png" />
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
  data() {
    return {
      abstand: '',
      popup: false
    }
  },

  methods: {
    //   getSternenSchweif() {
    //     let createdAt = this.vorfreude.createdAt
    //     let enddatum = this.vorfreude.date
    //     let currentDate = this.currentDate
    //     let vortag = new Date(currentDate)
    //     vortag.setDate(vortag.getDate() - 1)
    //     let folgetag = new Date(currentDate)
    //     folgetag.setDate(folgetag.getDate() + 1)
    //     if (this.istGleich(createdAt, enddatum)) {
    //       if (this.istGleich(enddatum, vortag)) {
    //         this.abstand = '__'
    //         this.stern = true
    //         return
    //       } else if (this.istGleich(enddatum, currentDate)) {
    //         this.abstand = '_______________'
    //         this.stern = true
    //         return
    //       } else if (this.istGleich(enddatum, folgetag)) {
    //         this.abstand = '____________________________'
    //         this.stern = true
    //         return
    //       }
    //     }
    //     if (this.istGroesser(enddatum, folgetag)) {
    //       if (this.istKleiner(createdAt, vortag)) {
    //         this.sternenschweifXXL = true
    //         return
    //       } else if (this.istGleich(createdAt, vortag)) {
    //         this.abstand = '___'
    //         this.sternenschweifXL = true
    //         return
    //       } else if (this.istGleich(createdAt, currentDate)) {
    //         this.abstand = '__________________'
    //         this.sternenschweifL = true
    //         return
    //       } else if (this.istGleich(createdAt, folgetag)) {
    //         this.abstand = '______________________________'
    //         this.sternenschweifM = true
    //         return
    //       }
    //     }
    //     if (this.istGleich(enddatum, folgetag)) {
    //       if (this.istKleiner(createdAt, vortag)) {
    //         this.stern = true
    //         this.sternenschweifSimple = true
    //         return
    //       } else if (this.istGleich(createdAt, vortag)) {
    //         this.abstand = '____'
    //         this.stern = true
    //         this.sternenschweifL = true
    //         return
    //       } else if (this.istGleich(createdAt, currentDate)) {
    //         this.abstand = '________________'
    //         this.sternenschweifM = true
    //         this.stern = true
    //         return
    //       }
    //     }
    //     if (this.istGleich(enddatum, currentDate)) {
    //       if (this.istKleiner(createdAt, vortag)) {
    //         this.sternenschweifXM = true
    //         this.stern = true
    //         return
    //       } else if (this.istGleich(createdAt, vortag)) {
    //         this.abstand = '___'
    //         this.sternenschweifM = true
    //         this.stern = true
    //         return
    //       }
    //     }
    //     if (this.istGleich(enddatum, vortag) && this.istKleiner(createdAt, vortag)) {
    //       this.stern = true
    //       this.sternenschweifXS = true
    //       return
    //     }
    //   },
    //   istGleich(firstDate, secondDate) {
    //     return (
    //       firstDate.getFullYear() == secondDate.getFullYear() &&
    //       firstDate.getMonth() == secondDate.getMonth() &&
    //       firstDate.getDate() == secondDate.getDate()
    //     )
    //   },
    //   istKleiner(firstDate, secondDate) {
    //     if (firstDate.getFullYear() < secondDate.getFullYear()) {
    //       return true
    //     } else if (firstDate.getFullYear() == secondDate.getFullYear()) {
    //       if (firstDate.getMonth() < secondDate.getMonth()) {
    //         return true
    //       } else if (firstDate.getMonth() == secondDate.getMonth()) {
    //         if (firstDate.getDate() < secondDate.getDate()) {
    //           return true
    //         }
    //       }
    //     }
    //     return false
    //   },
    //   istGroesser(firstDate, secondDate) {
    //     return !this.istKleiner(firstDate, secondDate) && !this.istGleich(firstDate, secondDate)
    //   }
  }
}
</script>

<style scoped>
.abstand {
  color: darkblue;
}
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
  background-color: #ec635e;
}
.wrapper {
  position: relative;
}
</style>
