<template>
  <textarea :class="adjusting" :value="text"></textarea>
</template>

<style scoped>
textarea {
  font-family: monospace;
  position: relative;
  min-height: 5.6rem;
  width: 100%;
  padding: 1rem;
  border: none;
  resize: none;
  overflow: hidden;
  border-radius: 4px;
  /* margin-bottom: 2rem; */
  /* border: 2px solid white; */
}

.adjusting-anticipation {
  color: #ec635e;
  background-color: rgba(236, 99, 94, 0.1);
  /* width: 77%;
  left: 2.3rem; */
  top: 1rem;
}

.adjusting-gratitude {
  color: rgba(92, 225, 230, 0.4);
  background-color: rgba(92, 225, 230, 0.1);
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
