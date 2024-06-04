<template>
  <div class="wrapper">
    <div class="star-container">
      <img
        class="red-star"
        src="../../public/header-star-red.png"
        @click="$router.push('/freudetimeline')"
      />
      <img
        class="green-star"
        src="../../public/header-star-green.png"
        @click="$router.push('/danktimeline')"
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
  background-color: rgb(79, 101, 223, 0.2);
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
}

.green-star:hover {
  transform: scale(1.1);
}

.overview {
  padding: 0.3rem;
}
</style>
