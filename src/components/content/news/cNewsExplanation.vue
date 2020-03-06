<template>
  <c-page class="vh-100 pt3" :rows="'20vh 66vh 14vh'">
    <c-header class="divider">
      <h1 class="pt5">{{  quiz.explanation_title }}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row>
        <c-col class="c-w-12">
          <h3 class="pb2">{{  quiz.explanation_subtitle  }}</h3>
        </c-col>
      </c-row>
      <c-row class="pt4">
        <c-col class="c-w-8">
          <c-row>
            <c-col class="c-w-12">
              <div class="two-columns user-input" v-html="quiz.explanation_description_html"></div>
            </c-col>
          </c-row>
        </c-col>
        <c-col class="c-w-4">
          <c-news-explanation-item
            :quizIndex="0" :quizData="quiz"
          ></c-news-explanation-item>
          <c-news-explanation-item
            :quizIndex="1" :quizData="quiz"
          ></c-news-explanation-item>
          <c-news-explanation-item
            :quizIndex="2" :quizData="quiz"
          ></c-news-explanation-item>
          <c-news-explanation-item
            :quizIndex="3" :quizData="quiz"
          ></c-news-explanation-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row class="">
        <c-col class="c-w-4">
          <c-link class="frame" :location="'stats'">{{ locale.EXPLANATION.CTA_GO_STATS }}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cNewsExplanationItem from '@/components/content/news/cNewsExplanationItem';

export default {
  name:'cNewsExplanation',
  mixins: [page, layout, media, form],
  components: { cNewsExplanationItem },
  props: {
    quiz: { type: Object, required: false },
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
    }),
  },
  data: function () {
    return {
      contentWidth: 90
    };
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>