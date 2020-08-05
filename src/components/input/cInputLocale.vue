<template>
  <div class="c-input-locale">
    <button type="button" class="btn-link w-25 mb4"
      v-for="lang in messages"
      :key="lang.locale"
      :class="{'selected': userLocale == lang.locale}"
      :disabled="userLocale == lang.locale"
      @click="setLanguage(lang.locale)"
    >{{lang.locale_for_humans}}</button>
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
    messages: function () {
      return Object.keys(this.i18n_messages).sort().reduce((r, k) => (r[k] = this.i18n_messages[k], r), {});
    },
    ...mapState({
      i18n_messages: state => state.i18n_messages
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
        this.$store.dispatch('getQuestionList').then(()=>{
          let tempArray = JSON.parse(JSON.stringify(this.$store.state.quizListBackup));
          this.$store.dispatch('setState', { key: 'quizList', value: tempArray}).then(()=>{
            this.$store.dispatch('setQuiz', {});
          });
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