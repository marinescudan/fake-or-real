<template>
  <div class="wrapper vh-100" v-if="quiz">
    <c-news-stats v-if="quiz.contentType === 'news'" :quiz="quiz"></c-news-stats>
    <c-adds-stats v-if="quiz.contentType === 'adds'" :quiz="quiz"></c-adds-stats>
    <c-videos-stats v-if="quiz.contentType === 'video'" :quiz="quiz"></c-videos-stats>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import cNewsStats from '@/components/content/news/cNewsStats';
  import cVideosStats from '@/components/content/videos/cVideosStats';
  import cAddsStats from '@/components/content/adds/cAddsStats';
  export default {
    name: 'question',
    components: { cNewsStats, cAddsStats, cVideosStats },
    computed: {
      ...mapState({
        quiz: state => state.quiz
      })
    },
    created() {
      this.$store.dispatch('setState', { key: 'quizList', value: this.$store.state.quizListBackup.slice()})
      .then(()=>{
        this.$store.commit('SET_STATE', { key: 'loaded', value: true });
        this.$router.push('/');
      });
    }
  }
</script>

<style lang="sass">
  // @import "@/styles/_variables.sass";
  // @import "@/styles/_mixins.sass";
</style>