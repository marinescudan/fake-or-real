<template>
  <c-page class="question-page vh-100" :rows="'20vh 63vh 17vh'">
    <c-header class="divider">
      <h1 class="pt5">{{ $t("QUESTION.TITLE")}}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-news-question v-if="$store.state.quiz.contentType === 'news'"></c-news-question>
      <c-adds-question v-if="$store.state.quiz.contentType === 'addvertisment'"></c-adds-question>
      <c-videos-question v-if="$store.state.quiz.contentType === 'video'"></c-videos-question>
    </c-main>
    <c-footer>
      <c-row>
        <c-col class="c-w-4">
          <c-link :location="'/response'">{{ $t("QUESTION.CTA")}}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import {page, layout, form} from '@/mixin/components.js';
import cNewsQuestion from '@/components/content/news/cNewsQuestion';
import cAddsQuestion from '@/components/content/adds/cAddsQuestion';
import cVideosQuestion from '@/components/content/videos/cVideosQuestion';
export default {
  name: 'question',
  mixins: [page, layout, form],
  components: { cNewsQuestion, cAddsQuestion, cVideosQuestion },
  data: function () {
    return {
      contentWidth: 90,
    }
  },
  beforeCreate: function () {
    },
  created: function () {
    
    },
  beforeMount: function () {
    // this.$store.dispatch('setRandomQuiz')

  },
  mounted: function () {

  },
  beforeUpdate: function () {

  },
  updated: function () {

  },
  beforeDestroy: function () {

  },
  destroyed: function () {

  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass"
</style>