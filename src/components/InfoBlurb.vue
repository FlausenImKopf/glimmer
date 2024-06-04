<template>
  <textarea :class="adjusting" :value="text"></textarea>
</template>

<style scoped>
textarea {
  font-family: monospace;
  position: relative;
  min-height: 5.6rem;
  resize: none;
  overflow: hidden;
  border-radius: 4px;
  padding: 1rem;
  /* margin-bottom: 2rem; */
  border: none;
  /* border: 2px solid white; */
}

.adjusting-anticipation {
  color: #ec635e;
  background-color: rgba(236, 99, 94, 0.1);
  left: 4.1rem;
  top: 5rem;
}

.adjusting-gratitude {
  color: rgba(92, 225, 230, 0.4);
  background-color: rgba(92, 225, 230, 0.1);
  left: 4.1rem;
  top: 1rem;
}
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    adjusting: {
      type: String,
      required: true
    }
  }
}
</script>
