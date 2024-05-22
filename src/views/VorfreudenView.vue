<template>
  <TheList
    exampleCheckboxText="Ich freue mich heute auf..."
    singleNote="single-anticipation"
    placeholderText="Ich freuen mich auf..."
  />
</template>

<script>
import TheList from '../components/TheList.vue'
export default {
  components: { TheList },
  props: ['exampleCheckboxText', 'singleNote', 'placeholderText']
}
</script>
