import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue')
  },
  {
    path: '/auth/registrar',
    name: 'registar',
    component: () => import('@/views/auth/RegistrarView.vue')
  },
  {
    path: '/privacy-policy',
    component: () => import('@/views/PrivacyPolicy.vue')
  },
  {
    path: '/terms',
    component: () => import('@/views/TermsView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/master/DashBoardView.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.token.tokenOn) 
        return next()
       else 
        return next('/auth/registrar')
    },

    children: [
      {
        path: '/perfil',
        name: 'perfil',
        component: () => import('@/views/master/PerfilView.vue')
      },
      {
        path: '/visao-geral',
        name: 'visao-geral',
        component: () => import('@/views/master/VisaoGeralView.vue')
      },
      {
        path: '/transacoes',
        name: 'transacoes',
        component: () => import('@/views/master/TransacoesView.vue')
      },
      {
        path: '/painel',
        name: 'painel',
        component: () => import('@/views/master/PainelView.vue')
      }
    ]
  },

]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
