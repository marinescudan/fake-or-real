<template>
  <c-page class="vh-100 pt3" :rows="'20vh 80vh'">
    <c-header class="divider">
      <h1 class="pt5">{{ quiz.question_title }}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row class="pt3 pb3">
        <c-col class="c-w-12">
          <h2>{{ quiz.question_subtitle }}</h2>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-12">
          <c-videos-question-item :quizData="quiz" :itemIndex="0"></c-videos-question-item>
        </c-col>
      </c-row>
    </c-main>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cVideosQuestionItem from '@/components/content/videos/cVideosQuestionItem';

export default {
  name:'cVideosQuestion',
  mixins: [page, layout, media, form],
  components: { cVideosQuestionItem },
  data: function () {
    return {
      contentWidth: 80
    };
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quiz: state => state.quiz,
    }),
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>