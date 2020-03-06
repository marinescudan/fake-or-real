<template>
  <c-page class="explanation-page vh-100 pt3" :rows="'20vh 66vh 14vh'">
    <c-header class="divider">
      <h1 class="pt5">{{ quiz.explanation_title }}</h1>
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
              <div class="two-columns  user-input" v-html="quiz.explanation_description_html"></div>
            </c-col>
          </c-row>
        </c-col>
        <c-col class="c-w-4">
          <c-videos-explanation-item :quizData="quiz" :itemIndex="0"></c-videos-explanation-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row>
        <c-col class="c-w-4">
          <c-link class="frame" :location="'stats'">{{ locale.EXPLANATION.CTA_GO_STATS }}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';
import cVideosExplanationItem from '@/components/content/videos/cVideosExplanationItem';

export default {
  name:'cVideosExplanation',
  mixins: [layout, media, form],
  components: { cVideosExplanationItem },
  data: function () {
    return {
      contentWidth: 90
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