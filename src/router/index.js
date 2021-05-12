import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Payment from '../views/Payment'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pagamento',
    name: 'Payment',
    component: Payment
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
