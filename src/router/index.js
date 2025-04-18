import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/LoginPage.vue';
import Dashboard from '../views/Dashboard.vue';
import store from '../store/index.js';

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
        path: '/dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
          if (store.state.user) next()
          else next('/login')
        }
      }
]

export default createRouter({
    history: createWebHistory(),
    routes
})