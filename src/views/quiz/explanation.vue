<template>
  <div class="wrapper vh-100" v-if="quiz">
    <c-news-explanation v-if="quiz.contentType === 'news'"></c-news-explanation>
    <c-adds-explanation v-if="quiz.contentType === 'adds'"></c-adds-explanation>
    <c-videos-explanation v-if="quiz.contentType === 'video'"></c-videos-explanation>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import cNewsExplanation from '@/components/content/news/cNewsExplanation';
  import cAddsExplanation from '@/components/content/adds/cAddsExplanation';
  import cVideosExplanation from '@/components/content/videos/cVideosExplanation';
  export default {
    name: 'question',
    components: { cNewsExplanation, cAddsExplanation, cVideosExplanation },
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