<template>
  <div class="mainview">
    <TheHeader />
    <RouterView />
  </div>
</template>

<style>
html {
  display: grid;
  place-items: center;
  align-items: normal;
}
.mainview {
  min-height: 100vh;
  max-width: 20rem;
  min-width: 20rem;
  background-color: darkblue;
  border-radius: 2rem;
  padding: 1rem;
}
</style>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  components: { TheHeader }
}
</script>
