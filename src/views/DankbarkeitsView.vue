<template>
  <TheList singleNote="single-gratitude" placeholderText="Ich bin dankbar für..." />
</template>

<script>
import TheList from '../components/TheList.vue'
export default {
  components: { TheList },
  props: ['singleNote', 'placeholderText']
}
</script>
