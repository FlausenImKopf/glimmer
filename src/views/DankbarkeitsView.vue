<template>
  <TheList
    exampleCheckboxText="Ich bin heute dankbar für..."
    singleNote="single-gratitude"
    placeholderText="Ich bin dankbar für..."
  />
</template>

<script>
import TheList from '../components/TheList.vue'
export default {
  components: { TheList },
  props: ['exampleCheckboxText', 'singleNote', 'placeholderText']
}
</script>
