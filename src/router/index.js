import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TwentyFourHourEfficacyView from '../views/TwentyFourHourEfficacyView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/24-hour-efficacy-data',
    component: TwentyFourHourEfficacyView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
