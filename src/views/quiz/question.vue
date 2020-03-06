<template>
  <div class="wrapper vh-100" v-if="quiz">
    <c-news-question v-if="quiz.contentType === 'news'"></c-news-question>
    <c-adds-question v-if="quiz.contentType === 'adds'"></c-adds-question>
    <c-videos-question v-if="quiz.contentType === 'video'"></c-videos-question>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import cNewsQuestion from '@/components/content/news/cNewsQuestion';
  import cAddsQuestion from '@/components/content/adds/cAddsQuestion';
  import cVideosQuestion from '@/components/content/videos/cVideosQuestion';
  export default {
    name: 'question',
    components: { cNewsQuestion, cAddsQuestion, cVideosQuestion },
    computed: {
      ...mapState({
        quiz: state => state.quiz
      })
    }
  }
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>