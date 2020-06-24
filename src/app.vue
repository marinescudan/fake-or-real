<template>
  <div id="app" class="app" v-bind:style="app_style">
    <div class="pt7" v-if="isLoading"><h1>...</h1></div>
    <div class="pt7" v-if="!isLoading && err"><h1>{{err}}</h1></div>

    <transition name="fade">
      <router-view v-if="!isLoading && dataLoaded && localisationLoaded && locale"/>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'app',
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      locale: state => state.locale,
      localisationLoaded: state => state.localisationLoaded,
      i18n_messages: state => state.i18n_messages,
      dataLoaded: state => state.dataLoaded,
      err: state => state.err
    }),
    availableWidth: function (){ return ( this.$screen.width * 0.5625 ) >= this.$screen.height ? this.$screen.height / 0.5625 : this.$screen.width;},
    html_class: function (){ return ["scale-" + Math.floor(this.availableWidth / 1920 * 100), "h-100"]; },
    app_style: function (){ return `height: ${ this.availableWidth * 0.5625 }px; width: ${this.availableWidth}px;`; }
  },
  mounted () {
    let isSetupPage = this.$router.currentRoute.name === 'setup';
    let storedLocale = JSON.parse(localStorage.getItem('locale'));

    let queryLocale = this.$route.query.locale;
    let loadRandom = this.$route.query.loadRandom;
    let showStats = this.$route.query.showStats;

    if (!isSetupPage && !storedLocale && !queryLocale) this.$router.push({name: 'setup'});

    if (queryLocale) this.setQueryParams('locale');
    if (loadRandom) this.setQueryParams('loadRandom');
    if (showStats) this.setQueryParams('showStats');

    this.toggleHTMLClass();
    this.setAppData({uuid: queryLocale ? null : this.$router.currentRoute.params.uuid || null});
  },
  updated () {
    this.toggleHTMLClass();
  },
  destroyed() {
    this.toggleHTMLClass();
  },
  methods: {
    setQueryParams(query) {
      localStorage.setItem(query, JSON.stringify(this.$route.query[query]));
      let queries = JSON.parse(JSON.stringify(this.$route.query));
      if(queries[query]) delete queries[query];
      this.$router.replace({ query: queries });
    },
    toggleHTMLClass() {
      let el  =  document.querySelector('html');
      let classList = el.classList.value ? el.classList.value.split(' ') : el.classList;
      classList.forEach(each => el.classList.remove(each));
      this.html_class.forEach(each => el.classList.add(each));
    },
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
@import "@/styles/_style.sass"
</style>
