<template>
  <div class="row">
    <span class="abstand">{{ abstand }}</span>
    {{ getSternenSchweif() }}
    <!-- //@mouseleave="popup = false" -->
    <div class="wrapper">
      <div class="image" @mouseover="popup = true" @mouseleave="popup = false">
        <img v-if="sternenschweifM" class="schweifM" src="../../public/sternenschweif2.png" />
        <img v-if="sternenschweifXM" class="schweifXM" src="../../public/sternenschweif2.png" />
        <img v-if="sternenschweifL" class="schweifL" src="../../public/sternenschweif3.png" />
        <img v-if="sternenschweifXXL" class="schweifXXL" src="../../public/sternenschweif4.png" />
        <img v-if="sternenschweifXL" class="schweifXL" src="../../public/sternenschweif5.png" />
        <img v-if="sternenschweifXS" class="schweifXS" src="../../public/sternenschweifXS.png" />
        <img
          v-if="sternenschweifSimple"
          class="schweifSimple"
          src="../../public/sternenschweifSimple.png"
        />
        <img v-if="stern" class="star" src="../../public/stern1.png" />
      </div>
      <MessagePopUp :show="popup" :message="vorfreude.message" />
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
      stern: false,
      sternenschweifM: false,
      sternenschweifXM: false,
      sternenschweifL: false,
      sternenschweifXXL: false,
      sternenschweifXL: false,
      sternenschweifSimple: false,
      sternenschweifXS: false,
      popup: false
    }
  },

  methods: {
    getSternenSchweif() {
      let createdAt = this.vorfreude.createdAt
      let enddatum = this.vorfreude.enddatum
      let currentDate = this.currentDate
      let vortag = new Date(currentDate)
      vortag.setDate(vortag.getDate() - 1)
      let folgetag = new Date(currentDate)
      folgetag.setDate(folgetag.getDate() + 1)

      if (this.istGleich(createdAt, enddatum)) {
        if (this.istGleich(enddatum, vortag)) {
          this.abstand = '__'
          this.stern = true
          return
        } else if (this.istGleich(enddatum, currentDate)) {
          this.abstand = '_______________'
          this.stern = true
          return
        } else if (this.istGleich(enddatum, folgetag)) {
          this.abstand = '____________________________'
          this.stern = true
          return
        }
      }
      if (this.istGroesser(enddatum, folgetag)) {
        if (this.istKleiner(createdAt, vortag)) {
          this.sternenschweifXXL = true
          return
        } else if (this.istGleich(createdAt, vortag)) {
          this.abstand = '___'
          this.sternenschweifXL = true
          return
        } else if (this.istGleich(createdAt, currentDate)) {
          this.abstand = '__________________'
          this.sternenschweifL = true
          return
        } else if (this.istGleich(createdAt, folgetag)) {
          this.abstand = '______________________________'
          this.sternenschweifM = true
          return
        }
      }
      if (this.istGleich(enddatum, folgetag)) {
        if (this.istKleiner(createdAt, vortag)) {
          this.stern = true
          this.sternenschweifSimple = true
          return
        } else if (this.istGleich(createdAt, vortag)) {
          this.abstand = '____'
          this.stern = true
          this.sternenschweifL = true
          return
        } else if (this.istGleich(createdAt, currentDate)) {
          this.abstand = '________________'
          this.sternenschweifM = true
          this.stern = true
          return
        }
      }
      if (this.istGleich(enddatum, currentDate)) {
        if (this.istKleiner(createdAt, vortag)) {
          this.sternenschweifXM = true
          this.stern = true
          return
        } else if (this.istGleich(createdAt, vortag)) {
          this.abstand = '___'
          this.sternenschweifM = true
          this.stern = true
          return
        }
      }
      if (this.istGleich(enddatum, vortag) && this.istKleiner(createdAt, vortag)) {
        this.stern = true
        this.sternenschweifXS = true
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
.abstand {
  color: darkblue;
}
.row {
  _margin: 0;
  color: hotpink;
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
.schweif1 {
  width: 8rem;
  height: auto;
}
.schweifXS {
  width: 2rem;
  height: 2rem;
}
.schweifM {
  width: 6rem;
  height: 2rem;
}
.schweifXM {
  width: 8rem;
  height: 2rem;
}
.schweifL {
  width: 12rem;
  height: 2rem;
}
.schweifSimple {
  width: 14rem;
  height: 2rem;
}
.schweifXXL {
  width: 300px;
  height: 2.2rem;
}
.schweifXL {
  width: 17rem;
  height: 2rem;
}
.wrapper {
  position: relative;
}
</style>
