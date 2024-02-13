import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import UsersView from '../views/UsersView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/users',
      component: UsersView,
    },
    {
      path: '/profile',
      component: ProfileView,
    },
    {
      path: '/login',
      component: LoginView
    }
  ]
})

const checkToken = () => localStorage.getItem('token')

router.beforeEach((to, from, next) => {
  // console.log(checkToken());
  if (to.path === '/profile' && !checkToken()) next('/login')
  else next()
})

export default router
