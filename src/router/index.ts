import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import CartView from '../views/CartView.vue'
import WishView from '../views/WishView.vue'
import { useToast } from 'vue-toast-notification'

const toast = useToast();

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
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/cart',
      name: 'cart',
     component: CartView,
      
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishView,
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); 
  const publicPages = ['home', 'register', 'login'];

  if (!isAuthenticated && !publicPages.includes(to.name as string)) {
    const toast = useToast();
    toast.warning('niste autorizovani') 
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router

