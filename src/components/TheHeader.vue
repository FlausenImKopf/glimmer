<template>
  <!-- Header idea 1: one red star and one blue star for anticipations and gratitudes respectively -->

  <header>
    <nav class="timeline-view-links">
      <button id="vorfreude-timeline-button" @click="$router.push('/freudetimeline')">
        <svg
          width="64px"
          height="64px"
          viewBox="-2.4 -2.4 28.80 28.80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0">
            <rect
              x="-2.4"
              y="-2.4"
              width="28.80"
              height="28.80"
              rx="14.4"
              fill="#101C42"
              strokewidth="0"
            ></rect>
          </g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
              fill="#FF5757"
            ></path>
            <path
              d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
              stroke="#FF5757"
              stroke-width="1.032"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </button>
      <button @click="$router.push('/')" class="headline">Glimmer</button>
      <button id="dankbarkeiten-timeline-button" @click="$router.push('/danktimeline')">
        <svg
          width="64px"
          height="64px"
          viewBox="-2.4 -2.4 28.80 28.80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0">
            <rect
              x="-2.4"
              y="-2.4"
              width="28.80"
              height="28.80"
              rx="14.4"
              fill="#101C42"
              strokewidth="0"
            ></rect>
          </g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
              fill="#5CE1E6"
            ></path>
            <path
              d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
              stroke="#5CE1E6"
              stroke-width="1.032"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </button>
    </nav>
    <div class="subtitles">
      <label id="vorfreude-timeline-label" for="vorfreude-timeline-button">Vorfreuden</label>
      <label id="dankbarkeiten-timeline-label" for="dankbarkeiten-timeline-button"
        >Dankbarkeiten</label
      >
    </div>
  </header>
</template>

<style scoped>
.headline {
  font-size: x-large;
  color: white;
  text-shadow: 0 0 15px #ffbd59;
  align-items: center;
  text-align: center;
}

.timeline-view-links {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid white;
  margin-bottom: none;
}

button {
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
}

.subtitles {
  color: white;
  font-size: small;
  display: flex;
  justify-content: space-between;
}

label {
  display: inline-block;
}

#vorfreude-timeline-label {
  text-shadow: 0 0 6px #ff5757;
}

#dankbarkeiten-timeline-label {
  text-shadow: 0 0 6px #5ce1e6;
}
</style>
