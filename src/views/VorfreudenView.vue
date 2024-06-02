<template>
  <TheVorfreuden singleNote="single-anticipation" placeholderText="Ich freuen mich auf..." />
</template>

<script>
import TheVorfreuden from '../components/TheVorfreuden.vue'
export default {
  components: { TheVorfreuden },
  props: ['singleNote', 'placeholderText']
}
</script>
