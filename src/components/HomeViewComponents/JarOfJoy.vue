<template>
  <section class="jar-of-joy">
    <div class="jar-wrapper">
      <img
        src="/transparent-black-ribbon-cloudy-water-with-bubbles-in-glass-jar659d1f3b8f5825.2592727417047959635871.png"
        alt="Ein Bild von einem Glas"
        class="jar-image"
      />
      <div class="stars">
        <img
          v-for="(star, index) in gratitudeStarPositions"
          :key="index"
          src="../../../public/header-star-green.png"
          alt="Star"
          class="star"
          :style="{ top: star.top, left: star.left }"
        />
        <img
          v-for="(star, index) in anticipationStarPositions"
          :key="index"
          src="../../../public/header-star-red.png"
          alt="Star"
          class="star"
          :style="{ top: star.top, left: star.left }"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapStores } from 'pinia'
import { useGratitudesStore } from '../../stores/gratitudes'
import { useAnticipationsStore } from '../../stores/anticipations'

export default {
  computed: {
    ...mapStores(useGratitudesStore, useAnticipationsStore),
    gratitudeStarPositions() {
      return this.gratitudesStore.gratitudes.map(() => ({
        top: this.generateStarPosition(),
        left: this.generateStarPosition()
      }))
    },
    anticipationStarPositions() {
      return this.gratitudesStore.gratitudes.map(() => ({
        top: this.generateStarPosition(),
        left: this.generateStarPosition()
      }))
    }
  },
  methods: {
    generateStarPosition() {
      return Math.random() * 100 + '%'
    }
  },

  mounted() {
    // get gratitudes and anticipations from api
    this.gratitudesStore.getGratitudes(), this.anticipationsStore.getAnticipations()
  }
}
</script>

<style scoped>
/* position the jar of joy */

.jar-of-joy {
  position: relative;
  max-width: 17rem;
  min-width: 10rem;
  background-color: #020b30;
  border-radius: 2rem;
  /* border: 2px solid white; */
}

/* Jar Styles */

.jar-wrapper {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  width: 100%;
  height: auto;
  transform: scale(1.1);
}

.jar-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.jar-wrapper::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(2, 11, 48, 0.5);
  border-radius: 4px;
}

/* Star Styles */

.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(0.6);
  left: -1rem;
  top: 1rem;
  /* border: 2px solid white; */
}

.star {
  position: absolute;
  width: 1rem;
  height: auto;
  margin-right: 0.1rem;
  transform: scale(2.5);
}
</style>
