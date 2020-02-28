<template>
  <c-page class="vh-100 pt3" :rows="'20vh 80vh'">
    <c-header class="divider">
      <!-- TODO: add video question title variable -->
      <h1 class="pt5">{{ $t("QUESTION.TITLE")}}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row>
        <c-col class="c-w-12">
          <!-- TODO: add video question subtitle variable -->
          <h2 class="pb4">{{ $t("QUESTION.SUBTITLE")}}</h2>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-12">
          <c-videos-question-item :quizItem="quiz.items[0]"></c-videos-question-item>
        </c-col>
      </c-row>
    </c-main>
  </c-page>
</template>

<script>
import {page, layout, media, form} from '@/mixins/components';
import cVideosQuestionItem from '@/components/content/videos/cVideosQuestionItem';

export default {
  name:'cVideosQuestion',
  mixins: [page, layout, media, form],
  components: { cVideosQuestionItem },
  props: {
    quiz: { type: Object, required: false },
  },
  data: function () {
    return {
      contentWidth: 90
    };
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>