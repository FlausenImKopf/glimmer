<template>
  <p>
    <span class="abstand">{{ abstand }}</span
    >{{ getSternenSchweif() }}
  </p>
</template>

<script>
export default {
  props: {
    vorfreude: Object,
    currentDate: Date
  },
  data() {
    return {
      abstand: ''
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

      //   console.log(
      //     'created: ' +
      //       createdAt +
      //       ' enddatum: ' +
      //       enddatum +
      //       ' current: ' +
      //       currentDate +
      //       ' vortag ' +
      //       vortag +
      //       ' folgetag ' +
      //       folgetag
      //   )
      if (this.istGleich(createdAt, enddatum)) {
        if (this.istGleich(enddatum, vortag)) {
          this.abstand = '___'
          return '🎆'
        } else if (this.istGleich(enddatum, currentDate)) {
          this.abstand = '________________'
          return '🎆'
        } else if (this.istGleich(enddatum, folgetag)) {
          this.abstand = '______________________________'
          return '🎆'
        }
      }
      if (this.istGroesser(enddatum, folgetag)) {
        if (this.istKleiner(createdAt, vortag)) {
          return '************************************'
        } else if (this.istGleich(createdAt, vortag)) {
          this.abstand = '___'
          return '/********************************'
        } else if (this.istGleich(createdAt, currentDate)) {
          this.abstand = '_______________'
          return '/********************'
        } else if (this.istGleich(createdAt, folgetag)) {
          this.abstand = '______________________________'
          return '/*****'
        }
      }
      if (this.istGleich(enddatum, folgetag)) {
        if (this.istKleiner(createdAt, vortag)) {
          return '******************************🎆'
        } else if (this.istGleich(createdAt, vortag)) {
          this.abstand = '___'
          return '/**************************🎆'
        } else if (this.istGleich(createdAt, currentDate)) {
          this.abstand = '_________________'
          return '/************🎆'
        }
      }
      if (this.istGleich(enddatum, currentDate)) {
        if (this.istKleiner(createdAt, vortag)) {
          return '**************🎆'
        } else if (this.istGleich(createdAt, vortag)) {
          this.abstand = '___'
          return '/***********🎆'
        }
      }
      if (this.istGleich(enddatum, vortag) && this.istKleiner(createdAt, vortag)) {
        return '***🎆'
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
p {
  _margin: 0;
  color: hotpink;
}
</style>
