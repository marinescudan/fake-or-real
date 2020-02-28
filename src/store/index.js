import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/http/api'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    quiz: {},
    quizIndex: null,
    quizList: [],
    quizListBackup: [],
    i18n_locale: 'en',
    i18n_keys: [],
    isLoading:  false,
    localisationLoaded: false,
    dataLoaded: false,
    err: {}
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
    // TODO: this localisations are not used in templates, remove this and use i18n service to load lang messages
    getLocalisationKeys: (context) => {
      context.commit('SET_STATE', { key: 'isLoading', value: true });
      let url = `https://api.ttc.io/for?slug=${'localisation'}&locale=${context.state.i18n_locale}`;
      return api.get(url).then((response) => {
        context.commit('SET_STATE', { key: 'isLoading', value: false });
        context.commit('SET_STATE', {  key: 'i18n_keys', value: response.data[0] });
        context.commit('SET_STATE', { key: 'localisationLoaded', value: true });
      }).catch((error) => context.commit('API_FAILURE', error));
    },
    getQuizList: (context) => {
      context.commit('SET_STATE', { key: 'isLoading', value: true });
      let url = `https://api.ttc.io/for?slug=${'question'}&locale=${context.state.i18n_locale}`;
      return api.get(url).then((response) => {
        context.commit('SET_STATE', { key: 'isLoading', value: false });
        context.commit('SET_STATE', { key: 'quizListBackup', value: response.data });
        context.commit('SET_STATE', { key: 'dataLoaded', value: true });
      }).catch((error) => context.commit('API_FAILURE', error));
    },
    setQuiz: (context, config={}) => {
      let tempArray = context.state.quizList.slice();
      if (config.loseCurrent) tempArray.splice(context.state.quizIndex, 1);
      let newQuizIndex = Math.floor(Math.random() * (tempArray.length + 1));
      return new Promise((resolve) => {
        context.commit('SET_STATE', {
          key: 'quizList',
          value: tempArray
        });
        context.commit('SET_STATE', {
          key: 'quiz',
          value: tempArray[newQuizIndex]
        });
        resolve();
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