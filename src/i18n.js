import Vue from 'vue'
import VueI18n from 'vue-i18n'
import api from '@/http/api'
import axios from 'axios'

Vue.use(VueI18n)


const loadedLanguages = [];

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLanguageAsync('en') || loadLocaleMessages()
})

export default i18n;

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

function setI18nLanguage(lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

//   i18n.loadLanguageAsync(lang).then(/* continue... */)
export function loadLanguageAsync(lang) {
  // TODO: remove hack to return from function and alow async i18n
  if (lang === 'en')  return false;

  if (loadedLanguages.includes(lang)) {
    if (i18n.locale !== lang) setI18nLanguage(lang)
    return Promise.resolve()
  }

  let url = `https://api.ttc.io/for?slug=${'localisation'}&locale=${lang}`;
  return api.get(url).then((response) => {
    let msgs = response.data
    loadedLanguages.push(lang)
    i18n.setLocaleMessage(lang, msgs.default)
    setI18nLanguage(lang)
  }).catch((error) => Vue.$store.commit('API_FAILURE', error));
}
