import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import About from '@/views/About.vue'
import Profile from '@/views/profile.vue'
import Game from '@/views/game.vue'
import Inbox from '@/views/inbox.vue'
import Analytics from '@/views/analytics.vue'
import Logout from '@/views/logout.vue'
import Setting from '@/views/setting.vue'
import Order from '@/views/order.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: About },
  { path: '/profile', component: Profile },
  { path: '/game', component: Game },
  { path: '/inbox', component: Inbox },
  { path: '/analytics', component: Analytics },
  { path: '/logout', component: Logout },
  { path: '/setting', component: Setting },
  { path: '/order', component: Order },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
