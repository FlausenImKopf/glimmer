<template>
  <TheList singleNote="single-anticipation" placeholderText="Ich freuen mich auf..." />
</template>

<script>
import TheList from '../components/TheList.vue'
export default {
  components: { TheList },
  props: ['singleNote', 'placeholderText']
}
</script>
