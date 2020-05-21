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
    let locale = JSON.parse(window.localStorage.getItem('locale'));
    if (!locale && this.$router.currentRoute.name !== 'setup') {
      this.$router.push({name: 'setup'});
    }

    if ( this.$router.currentRoute.params.uuid ) {
      this.setAppData({uuid: this.$router.currentRoute.params.uuid});
    } else {
      this.setAppData({uuid: null});
    }
  },
  methods: {
    setAppData: function (config={}) {
      this.$store.dispatch('getLocalisationFiles').then(()=>{
        this.setQestionList(config);
      });
    },
    setQestionList: function (config={}) {
      this.$store.dispatch('getQuestionList').then(()=>{
        let tempArray = JSON.parse(JSON.stringify(this.$store.state.quizListBackup));
        this.$store.dispatch('setState', { key: 'quizList', value: tempArray}).then(()=>{
          this.setLocale();
          this.$store.dispatch('setQuiz', config);
        });
      });
    },
    setLocale: function () {
      let locale = JSON.parse(localStorage.getItem('locale'));
      this.$i18n.locale = locale;
      if ( locale in this.i18n_messages ) {
        this.$store.dispatch('setState', { key: 'locale', value: this.$store.state.i18n_messages[locale]});
      } else {
        if (this.$router.currentRoute.name !== 'setup') this.$router.push({name: 'setup'});
      }
    }
  }
}
</script>

<style lang="sass">
  @import "@/styles/_main.sass"
</style>
