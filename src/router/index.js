import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DankView from '../views/DankTimeLineView.vue'
import FreudeView from '../views/FreudeTimeLineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dankbarkeiten',
      name: 'dank',
      component: DankView
    },
    {
      path: '/vorfreuden',
      name: 'fruede',
      component: FreudeView
    }
  ]
})

export default router
