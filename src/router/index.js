import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import Reports from '../components/Reports.vue';
import Alerts from '../components/Alerts.vue';
import DynamicComponent from '../components/DynamicComponent.vue';

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports,
  },
  {
    path: '/alerts',
    name: 'Alerts',
    component: Alerts,
  },
  {
    path: '/details',
    name: 'DynamicComponent',
    component: DynamicComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
