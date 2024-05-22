<template>
  <div class="mainview">
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
  background-color: darkblue;
  border-radius: 2rem;
  padding: 1rem;
}
</style>
