<template>
  <header>
    <div class="input-view-links">
      <RouterLink to="/vorfreuden">Vorfreuden</RouterLink> |
      <RouterLink to="/dankbarkeiten">Dankbarkeiten</RouterLink>
    </div>
    <div class="timeline-view-links">
      <button @click="$router.push('/danktimeline')">Dankbarkeiten</button>
      <button @click="$router.push('/freudetimeline')">Vorfreuden</button>
      <button>Gewohnheiten</button>
    </div>
  </header>
  <main>
    <span class="vorfreude-label">heute freue ich mich auf</span><br />
    <span class="dankbarkeiten-label">heute bin ich dankbar für</span>
  </main>
</template>

<script></script>

<style scoped>
.timeline-view-links {
  display: flex;
}
main {
  padding: 1rem;
  color: Cornflowerblue;
}
</style>
