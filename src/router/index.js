import { createRouter, createWebHistory } from 'vue-router'
import AddAnticipationsView from '../views/AddAnticipationsView.vue'
import HomeView from '../views/HomeView.vue'
import GratitudeTimelineView from '../views/GratitudeTimelineView.vue'
import AnticipationTimelineView from '../views/AnticipationTimelineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/anticipations',
      name: 'anticipations',
      component: AddAnticipationsView
    },
    {
      path: '/gratitudes',
      name: 'gratitudes',
      // route level code-splitting
      // this generates a separate chunk (DankbarkeitsView.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddGratitudesView.vue')
    },
    {
      path: '/gratitude-timeline',
      name: 'gratitude-timeline',
      component: GratitudeTimelineView
    },
    {
      path: '/anticipation-timeline',
      name: 'anticipations-timeline',
      component: AnticipationTimelineView
    }
  ]
})

export default router
