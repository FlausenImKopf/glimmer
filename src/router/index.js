import { createRouter, createWebHistory } from 'vue-router'
import VorfreudenView from '../views/VorfreudenView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    }
  ]
})

export default router
