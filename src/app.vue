<template>
  <div id="app" class="app vh-100">
    <router-view v-if="!isLoading && dataLoaded && localisationLoaded"/>
    <div class="pt7" v-if="isLoading">
      <h1>...</h1>
    </div>
    <div class="pt7" v-if="!isLoading && err">
      <h1>{{err}}</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'app',
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      localisationLoaded: state => state.localisationLoaded,
      i18n_messages: state => state.i18n_messages,
      dataLoaded: state => state.dataLoaded,
      err: state => state.err,
    })
  },
  mounted () {
    this.setMessages();
  },
  methods: {
    setMessages: function () {
      this.$store.dispatch('getMessages').then(()=>{
        this.setQuizList();
      });
    },
    setQuizList: function () {
      this.$store.dispatch('getQuizList').then(()=>{
        let tempArray = JSON.parse(JSON.stringify(this.$store.state.quizListBackup));
        this.$store.dispatch('setState', { key: 'quizList', value: tempArray}).then(()=>{
          this.changeLocale();
        });
      });
    },
    changeLocale: function () {
      let locale = JSON.parse(localStorage.getItem('locale'));
      this.$i18n.locale = locale;
      if ( locale in this.i18n_messages ) {
        this.$store.dispatch('setState', { key: 'locale', value: this.$store.state.i18n_messages[locale]}).then(()=>{
          if (this.$router.currentRoute.name !== 'start') this.$router.push({name: 'start'});
        });
      } else {
        localStorage.setItem('locale', null);
        if (this.$router.currentRoute.name !== 'setup') this.$router.push({name: 'setup'});
      }
    }
  }
}
</script>

<style lang="sass">
  @import "@/styles/_main.sass"
</style>
