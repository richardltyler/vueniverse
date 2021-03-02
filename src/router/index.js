import { createRouter, createWebHistory } from 'vue-router';
import ClickToEnter from '../views/ClickToEnter.vue';
import PicOfTheDay from '../views/PicOfTheDay.vue';
import About from '../views/About.vue';
import PageNotFound from '../views/PageNotFound.vue';
import Devs from '../views/Devs.vue';


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
      component: PicOfTheDay,
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/date/:date',
      component: PicOfTheDay,
    },
    {
      path: '/devs',
      component: Devs
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    }
  ]
})

export default router;
