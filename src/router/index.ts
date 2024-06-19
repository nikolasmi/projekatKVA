import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import CartView from '../views/CartView.vue'
import WishView from '../views/WishView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CartView,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = localStorage.getItem('token'); // Ovo bi trebalo da proveravaš stvarno stanje autentifikacije korisnika
        if (!isAuthenticated) {
          next({ name: 'login', query: { redirected: true } });
        } else {
          next();
        }
      }
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishView,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = localStorage.getItem('token'); // Ovo bi trebalo da proveravaš stvarno stanje autentifikacije korisnika
        if (!isAuthenticated) {
          next({ name: 'login', query: { redirected: true } });
        } else {
          next();
        }
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // Provera postojanja tokena
  const publicPages = ['home', 'register', 'login'];

  if (!isAuthenticated && !publicPages.includes(to.name as string)) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router
