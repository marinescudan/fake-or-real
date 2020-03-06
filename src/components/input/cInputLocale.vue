<template>
  <div class="c-input-locale">
    <button type="button" class="btn-link"
       v-for="lang in i18n_messages"
       :key="lang.locale"
       :class="{'selected': $i18n.locale == lang.locale}"
       @click="setLanguage(lang.locale)"
    >{{lang.locale_for_humans}}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import languages from '@/constants/languages';

export default {
  name:'cInputLocale',
  data: function () {
    return {
      languages
    }
  },
  computed: {
    ...mapState({
      i18n_messages: state => state.i18n_messages,
    }),
  },
  methods: {
    setLanguage: function (key) {
      localStorage.setItem('locale', JSON.stringify(key));
      this.$i18n.locale = key;
      this.$store.dispatch('setState', { key: 'locale', value: this.$store.state.i18n_messages[key]}).then(()=>{
         this.$router.push({name: 'start'});
      });
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>