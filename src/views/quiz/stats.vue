<template>
  <div class="wrapper vh-100" v-if="quiz">
    <c-news-stats v-if="quiz.contentType === 'news'"></c-news-stats>
    <c-adds-stats v-if="quiz.contentType === 'adds'"></c-adds-stats>
    <c-videos-stats v-if="quiz.contentType === 'video'"></c-videos-stats>
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
    }
  }
</script>

<style lang="sass">
  // @import "@/styles/_variables.sass";
  // @import "@/styles/_mixins.sass";
</style>