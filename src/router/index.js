import { createRouter, createWebHistory } from 'vue-router';
import PicOfTheDay from '../views/PicOfTheDay.vue';
import About from '../views/About.vue';

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: PicOfTheDay
    },
    {
      path: '/about',
      component: About
    }
  ]
})

export default router;
