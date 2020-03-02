import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/http/api'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    quiz: null,
    quizIndex: null,
    quizList: null,
    quizListBackup: null,
    i18n_locale: 'en',
    isLoading:  false,
    localisationLoaded: false,
    dataLoaded: false,
    err: null
  },
  mutations: {
    SET_STATE (state, config) {
      state[config.key] = config.value;
    },
    SET_STATE_PARAM (state, config) {
      state[config.state][config.key] = config.value;
    },
    API_FAILURE (state, err) {
      state.err = err
    }
  },
  actions: {
    getQuizList: (context) => {
      return new Promise((resolve, reject) => {
        context.commit('SET_STATE', { key: 'isLoading', value: true });
        let url = `https://api.ttc.io/for?slug=${'question'}&locale=${context.state.i18n_locale}`;
        api.get(url).then((response) => {
          context.commit('SET_STATE', { key: 'isLoading', value: false });
          context.commit('SET_STATE', { key: 'quizListBackup', value: response.data });
          context.commit('SET_STATE', { key: 'dataLoaded', value: true });
          resolve(response.data);
        }).catch((error) => {
          context.commit('API_FAILURE', error)
          reject(error);
        });
      });
    },
    setQuiz: (context, config={}) => {
      return new Promise((resolve) => {
        // debugger;
        let tempArray = context.state.quizList.slice();
        if (config.loseCurrent) tempArray.splice(context.state.quizIndex, 1);
        let newQuizIndex = Math.floor(Math.random() * (tempArray.length));
        context.commit('SET_STATE', { key: 'quiz', value: tempArray[newQuizIndex] });
        context.commit('SET_STATE', { key: 'quizList', value: tempArray });
        resolve(context.state.quiz);
      });
    },
    setState: (context, config) => {
      return new Promise((resolve) => {
        context.commit('SET_STATE', { key: config.key, value: config.value});
        resolve();
      });
    },
    setStateParram: (context, config) => {
      return new Promise((resolve) => {
        context.commit('SET_STATE_PARAM', { state: config.state, key: config.key, value: config.value});
        resolve();
      });
    }
  }
})