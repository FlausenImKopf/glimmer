<template>
  <div class="wrapper">
    <div class="star-container">
      <img
        class="red-star"
        src="../../public/header-star-red.png"
        @click="$router.push('/anticipation-timeline')"
      />
      <img
        class="green-star"
        src="../../public/header-star-green.png"
        @click="$router.push('/gratitude-timeline')"
      />
    </div>
    <div class="overview" @click="$router.push('/')">
      <h1>Glimmer</h1>
    </div>
    <div class="placeholder"></div>
  </div>
</template>

<style scoped>
.wrapper {
  font-family: 'Antonio';
  color: #4f65df;
  background-color: rgba(79, 101, 223, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem 0.8rem 1rem 0.8rem;
  _padding-bottom: 1rem;
}
.star-container {
  display: flex;
  align-items: center;
}
img {
  width: 50px;
}
.red-star:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.green-star:hover {
  transform: scale(1.1);
  cursor: pointer;
}

h1:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.overview {
  padding: 0.3rem;
}
</style>
