<template>
  <div id="app" class="app" v-bind:style="app_style">
    <router-view v-if="!isLoading && dataLoaded && localisationLoaded && locale"/>
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
// import { screen } from './mixins/screen.js';
export default {
  name: 'app',
  // mixins: [ screen ],
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      locale: state => state.locale,
      localisationLoaded: state => state.localisationLoaded,
      i18n_messages: state => state.i18n_messages,
      dataLoaded: state => state.dataLoaded,
      err: state => state.err,
    }),
    availableWidth: function (){ return ( this.$screen.width * 0.5625 ) >= this.$screen.height ? this.$screen.height / 0.5625 : this.$screen.width;},
    html_class: function (){ return [ `scale-${Math.floor(this.availableWidth / 1920 * 100) }` ]},
    app_style: function (){ return `height: ${ this.availableWidth * 0.5625 }px; width: ${this.availableWidth}px;`; },
  },
  mounted () {
    this.toggleHTMLClass();
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
  updated () {
    this.toggleHTMLClass();
  },
  destroyed() {
    this.toggleHTMLClass();
  },
  methods: {
    toggleHTMLClass() {
      let el  =  document.querySelector('html');
      // let oldClasses = el.classList.value.split(' ');
      el.classList.value.split(' ').forEach(each => el.classList.remove(each));
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
@import "@/styles/_main.sass"
</style>
