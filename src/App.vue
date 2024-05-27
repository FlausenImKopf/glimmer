<template>
  <div class="mainview">
    <header>
      <h1 class="headline">Glimmer</h1>
    </header>
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
.headline {
  color: #e7e7e0;
  text-shadow: 0 0 15px #8d6d29;
  align-items: center;
  text-align: center;
  border-bottom: 2px white solid;
  padding-bottom: 1.5rem;
}
</style>
