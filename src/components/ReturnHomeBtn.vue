<template>
  <div class="btn-wrapper">
    <button :class="adjusting" @click="$router.push('/')">zurück zu Mein Tag</button>
  </div>
</template>

<script>
export default {
  props: {
    adjusting: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.adjusting-gratitude {
  color: #5ce1e6;
  background-color: rgb(92, 225, 230, 0.1);
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-family: monospace;
}

.adjusting-gratitude:hover {
  background-color: rgb(92, 225, 230, 0.4);
  cursor: pointer;
}

.adjusting-anticipation {
  color: #ec635e;
  background-color: rgb(236, 99, 94, 0.1);
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-family: monospace;
}

.adjusting-anticipation:hover {
  background-color: rgb(236, 99, 94, 0.4);
  cursor: pointer;
}
</style>
