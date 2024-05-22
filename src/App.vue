<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterLink to="/vorfreuden">Vorfreuden</RouterLink> |
    <RouterLink to="/dankbarkeiten">Dankbarkeiten</RouterLink>
    <RouterView />
  </main>
</template>
