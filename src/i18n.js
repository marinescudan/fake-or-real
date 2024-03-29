import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
let locale = getQueryParameters().locale || JSON.parse(localStorage.getItem('locale')) || process.env.VUE_APP_I18N_LOCALE || "en";
function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}
function getQueryParameters (str) {
  return (str || document.location.search).replace(/(^\?)/, '').split("&").map(function (n) { return n = n.split("="), this[n[0]] = n[1], this }.bind({}))[0];
}
export default new VueI18n({
  locale: locale,
  fallbackLocale: locale,
  messages: loadLocaleMessages()
});