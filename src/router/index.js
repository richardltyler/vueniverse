import { createRouter, createWebHistory } from 'vue-router';
import ClickToEnter from '../views/ClickToEnter.vue'
import PicOfTheDay from '../views/PicOfTheDay.vue';
import About from '../views/About.vue';

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: ClickToEnter
    },
    {
      path: '/home',
      component: PicOfTheDay
    },
    {
      path: '/about',
      component: About
    }
  ]
})

export default router;
