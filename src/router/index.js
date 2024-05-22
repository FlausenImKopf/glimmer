import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DankTimeLineView from '../views/DankTimeLineView.vue'
import FreudeTimeLineView from '../views/FreudeTimeLineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/danktimeline',
      name: 'dank',
      component: DankTimeLineView
    },
    {
      path: '/freudetimeline',
      name: 'fruede',
      component: FreudeTimeLineView
    }
  ]
})

export default router
