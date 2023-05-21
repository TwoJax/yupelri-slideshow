import { createRouter, createWebHistory } from 'vue-router';

import ConcomitantUseView from '../views/ConcomitantUseView.vue';
import HomeView from '../views/HomeView.vue';
import TwentyFourHourEfficacyView from '../views/TwentyFourHourEfficacyView.vue';
import TwelveWeekEfficacyView from '../views/TwelveWeekEfficacyView.vue';
import QualityOfLifeView from '../views/QualityOfLifeView.vue';
import SafetyProfileView from '../views/SafetyProfileView.vue';

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
  {
    path: '/12-week-efficacy-data',
    component: TwelveWeekEfficacyView,
  },
  {
    path: '/concomitant-use',
    component: ConcomitantUseView,
  },
  {
    path: '/quality-of-life',
    component: QualityOfLifeView,
  },
  {
    path: '/safety-profile',
    component: SafetyProfileView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
