import { RouteRecordRaw } from 'vue-router';

export default [
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('./SignIn.vue'),
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('./SignUp.vue'),
  },
] as RouteRecordRaw[];
