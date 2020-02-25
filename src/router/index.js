import Vue from 'vue'
import VueRouter from 'vue-router'
import start from '../views/start.vue'
import question from '../views/quiz/question.vue'
import response from '../views/quiz/response.vue'
import stats from '../views/quiz/stats.vue'
import finish from '../views/finish.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: start
  },
  {
    path: '/question',
    name: 'question',
    component: question,
  },
  {
    path: '/response',
    name: 'response',
    component: response,
  },
  {
    path: '/stats',
    name: 'stats',
    component: stats,
  },
  {
    path: '/finish',
    name: 'finish',
    component: finish,
  },
]

const router = new VueRouter({
  routes
})

export default router
