<template>
  <div id="app" class="app vh-100">
    <router-view v-if="!isLoading && dataLoaded"/>
    <div class="pt7" v-if="isLoading">
      <h1>Loading, please wait...</h1>
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
    this.$store.dispatch('getQuizList').then(()=>{
      this.$store.dispatch('setState', { key: 'quizList', value: this.$store.state.quizListBackup}).then(()=>{
        if (this.$router.currentRoute.name !== 'start') this.$router.push({name: 'start'});
      });
    });
  }
}
</script>

<style lang="sass">
  @import "@/styles/_main.sass"
</style>
