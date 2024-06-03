<template>
  <div class="jar-wrapper">
    <img
      src="/transparent-black-ribbon-cloudy-water-with-bubbles-in-glass-jar659d1f3b8f5825.2592727417047959635871.png"
      alt="Ein Bild von einem Glas"
      class="jar-image"
    />
    <div class="stars">
      <img
        v-for="(star, index) in starPositions"
        :key="index"
        src="../../public/header-star-green.png"
        alt="Star"
        class="star"
        :style="{ top: star.top, left: star.left }"
      />
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useGratitudesStore } from '../stores/gratitudes'

export default {
  computed: {
    ...mapStores(useGratitudesStore),
    starPositions() {
      return this.gratitudesStore.gratitudes.map(() => ({
        top: this.generateStarPosition(),
        left: this.generateStarPosition()
      }))
    }
  },
  methods: {
    getRandomPosition(min, max) {
      return Math.random() * (max - min) + min
    },
    generateStarPosition() {
      return this.getRandomPosition(10, 90) + '%'
    }
  },

  mounted() {
    // get gratitudes from api
    this.gratitudesStore.getGratitudes()
  }
}
</script>

<style scoped>
/* Jar Styles */
.jar-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  bottom: -12rem;
  left: 1rem;
  /* border: 2px solid white; */
}

.jar-wrapper img {
  max-width: 100%;
  height: auto;
}

.jar-image {
  width: 100%;
}

.jar-wrapper::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(2, 11, 48, 0.3);
  border-radius: 4px;
}

/* Star Styles */

.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  width: 1rem;
  height: auto;
  margin-right: 0.1rem;
  transform: scale(2);
}
</style>
