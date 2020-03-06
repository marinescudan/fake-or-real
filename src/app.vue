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
      dataLoaded: state => state.dataLoaded,
      err: state => state.err,
    })
  },
  mounted () {
    this.$store.dispatch('getMessages').then(()=>{
      this.$store.dispatch('getQuizList').then(()=>{
        this.$store.dispatch('setState', { key: 'quizList', value: this.$store.state.quizListBackup}).then(()=>{
          if (!JSON.parse(localStorage.getItem('locale'))) {
            if (this.$router.currentRoute.name !== 'setup') this.$router.push({name: 'setup'});
          } else {
            let key = JSON.parse(localStorage.getItem('locale'));
            this.$i18n.locale = key;
            this.$store.dispatch('setState', { key: 'locale', value: this.$store.state.i18n_messages[key]}).then(()=>{
              if (this.$router.currentRoute.name !== 'start') this.$router.push({name: 'start'});
            });
          }
        });
      });
    });
  }
}
</script>

<style lang="sass">
  @import "@/styles/_main.sass"
</style>
