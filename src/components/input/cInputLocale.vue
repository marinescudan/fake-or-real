<template>
  <div class="c-input-locale">
    <button type="button" class="btn-link"
       v-for="lang in i18n_messages"
       :key="lang.locale"
       :class="{'selected': userLocale == lang.locale}"
       @click="setLanguage(lang.locale)"
    >{{lang.locale_for_humans || lang.setup_locale_for_humans}}</button>
    <!-- TODO: remove lang.setup_locale_for_humans -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name:'cInputLocale',
  data: function () {
    return {
      locale: null
    }
  },
  computed: {
    ...mapState({
      i18n_messages: state => state.i18n_messages,
    }),
    userLocale: function () {
      return this.locale || JSON.parse(localStorage.getItem('locale'));
    }
  },
  methods: {
    setLanguage: function (key) {
      localStorage.setItem('locale', JSON.stringify(key));
      this.$i18n.locale = key;
      this.locale = key;
      this.$store.dispatch('setState', { key: 'locale', value: this.$store.state.i18n_messages[key]}).then(
        this.$store.dispatch('getQuizList').then(()=>{
          let tempArray = JSON.parse(JSON.stringify(this.$store.state.quizListBackup));
          this.$store.dispatch('setState', { key: 'quizList', value: tempArray});
        })
      );
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>