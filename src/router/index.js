import Vue from 'vue';
import VueRouter from 'vue-router';
import setup from '../views/setup.vue';
import start from '../views/start.vue';
import finish from '../views/finish.vue';
import question from '../views/quiz/question.vue';
import explanation from '../views/quiz/explanation.vue';
import stats from '../views/quiz/stats.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "start",
    component: start
  },
  {
    path: "/setup",
    name: "setup",
    component: setup
  },
  {
    path: "/finish",
    name: "finish",
    component: finish
  },
  {
    path: "/question/:uuid",
    name: "question",
    component: question
  },
  {
    path: "/explanation/:uuid",
    name: "explanation",
    component: explanation
  },
  {
    path: "/stats/:uuid",
    name: "stats",
    component: stats
  }
];



const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  next();
});
export default router
