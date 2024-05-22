<template>
  <header>
    <button @click="$router.push('/danktimeline')">Dankbarkeiten</button>
    <button @click="$router.push('/freudetimeline')">Vorfreuden</button>
    <button>Gewohnheiten</button>
  </header>
  <main>
    <span class="vorfreude-label">heute freue ich mich auf</span><br />
    <span class="dankbarkeiten-label">heute bin ich dankbar für</span>
  </main>
</template>

<script></script>

<style scoped>
header {
  display: flex;
  min-height: 4rem;
}
main {
  padding: 1rem;
  color: Cornflowerblue;
}
</style>
