import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useStore } from 'vuex';
import authRoutes from '../modules/auth/auth.routes';
import { AuthState } from '../modules/auth/auth.store';
import privateRoutes from './private.routes';
import publicRoutes from './public.routes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home', // Landing route
    component: () => import('../modules/layout/Home.vue'),
  },
  ...publicRoutes,
  ...authRoutes,
  ...privateRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../modules/NotFound.vue'),
  },
];

const history = import.meta.env.BASE_URL
  ? createWebHashHistory(import.meta.env.BASE_URL)
  : createWebHistory();

const router = createRouter({ history, routes });

router.beforeEach(async (to, from) => {
  if (!to.meta.requiresAuth) return true;

  const store = useStore<AuthState>();

  if (!store.state.token) return false;

  await store.dispatch('checkToken');
  // token exists and is valid = authorized
  const isLoggedIn = store.getters.isAuthenticated;

  const result =
    to.meta.requiresAuth && !isLoggedIn
      ? 'Home' // Redirects to 'Home' named route
      : true; // Allows to continue the navigation

  console.log('Check for compatibility with VueX v4\n', {
    to,
    isLoggedIn,
    result,
    base: import.meta.env.BASE_URL,
    history,
  });

  return result;
});

export default router;
