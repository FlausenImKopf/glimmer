import { createRouter, createWebHistory } from 'vue-router'
import VorfreudenView from '../views/VorfreudenView.vue'
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
      path: '/vorfreuden',
      name: 'Vorfreuden',
      component: VorfreudenView
    },
    {
      path: '/dankbarkeiten',
      name: 'dankbarkeiten',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DankbarkeitsView.vue')
    },
    {
      path: '/danktimeline',
      name: 'dank',
      component: DankTimeLineView
    },
    {
      path: '/freudetimeline',
      name: 'freude',
      component: FreudeTimeLineView
    }
  ]
})

export default router
