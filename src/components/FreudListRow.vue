<template>
  <p>{{ getSternSchleif() }}</p>
</template>

<script>
export default {
  props: {
    vorfreude: Object,
    datum: Date
  },

  methods: {
    getFaktor() {
      let result = 0
      if (Date.parse(this.vorfreude.enddatum) > Date.parse(this.datum) + 1) {
        result = 3
      } else if (Date.parse(this.vorfreude.enddatum) == Date.parse(this.datum)) {
        result = 2
      } else if (Date.parse(this.vorfreude.enddatum) == Date.parse(this.datum) - 1) {
        result = 1
      }
      return result
    },
    getSternSchleif() {
      let SternSchleif = '***********'
      return SternSchleif.repeat(this.getFaktor())
    }
  }
}
</script>

<style scoped>
p {
  _margin: 0;
  color: hotpink;
}
</style>
