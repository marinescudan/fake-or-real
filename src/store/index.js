import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/http/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quizList: [],
    quiz: {
      contentType: 'news',
    },
    err: {}
  },
  mutations: {
    SET_QUIZ_LIST (state, items) {
      state.quizList = items
    },
    SET_QUIZ (state, item) {
      state.quiz = item
    },
    API_FAILURE (state, err) {
      state.err = err
    }
  },
  actions: {
    getQuizList: (context) => {
      return api
      .get('https://api.ttc.io/for/')
      .then((response) => {
        context.commit('SET_QUIZ_LIST', response.data)
      })
      .catch((error) => context.commit('API_FAILURE', error));
    },
    setRandomQuiz: (context) => {
      context.commit('SET_QUIZ', context.state.quizList[Math.floor(Math.random() *  (context.state.quizList.length + 1))])
    }
  },
  modules: { }
})