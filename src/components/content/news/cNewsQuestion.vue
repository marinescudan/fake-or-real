<template>
  <div class="c-news pt3">
    <c-row>
      <c-col class="c-w-12">
        <h2 class="pb4">{{ $t("QUESTION.SUB_TITLE")}}</h2>
      </c-col>
    </c-row>
    <c-row>
      <c-col class="c-w-6">
        <c-news-question-item :newsItem="newsItem"></c-news-question-item>
      </c-col>
      <c-col class="c-w-6">
        <c-news-question-item :newsItem="newsItem"></c-news-question-item>
      </c-col>
    </c-row>
    <c-row>
      <c-col class="c-w-6">
        <c-news-question-item :newsItem="newsItem"></c-news-question-item>
      </c-col>
      <c-col class="c-w-6">
        <c-news-question-item :newsItem="newsItem"></c-news-question-item>
      </c-col>
    </c-row>
  </div>
</template>

<script>
import {layout, media, form} from '@/mixin/components';
import cNewsQuestionItem from '@/components/content/news/cNewsQuestionItem';

export default {
  name:'cNewsQuestion',
  mixins: [layout, media, form],
  components: { cNewsQuestionItem },
  props: {
    newsData: { type: Object, required: false },
  },
  data: function () {
    return {
      newsItem: {
        num: 1
      }
    }
  },
  computed: { }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";

.c-news
  display: block

</style>