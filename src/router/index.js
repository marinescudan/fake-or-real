import Vue from 'vue'
import VueRouter from 'vue-router'
import setup from '../views/setup.vue'
import start from '../views/quiz/start.vue'
import question from '../views/quiz/question.vue'
import explanation from '../views/quiz/explanation.vue'
import stats from '../views/quiz/stats.vue'
import finish from '../views/quiz/finish.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: start
  },
  {
    path: '/setup',
    name: 'setup',
    component: setup
  },
  {
    path: '/question',
    name: 'question',
    component: question,
  },
  {
    path: '/explanation',
    name: 'explanation',
    component: explanation,
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
});

router.beforeEach((to, from, next) => {
  next();
});
export default router
