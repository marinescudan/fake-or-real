<template>
  <c-page class="explanation-page vh-100 pt3" :rows="'20vh 66vh 14vh'">
    <c-header class="divider">
      <h1 class="pt5">{{ quiz.explanation_title}}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row class="pt3 pb3">
        <c-col class="c-w-12">
          <h2>{{ quiz.explanation_subtitle }}</h2>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-8">
          <c-row>
            <c-col class="c-w-12">
              <div class="two-columns user-input" v-html="quiz.contents"></div>
            </c-col>
          </c-row>
        </c-col>
        <c-col class="c-w-4">
          <c-adds-explanation-item
            :itemIndex="0" :quizData="quiz"
          ></c-adds-explanation-item>
          <c-adds-explanation-item
            :itemIndex="1" :quizData="quiz"
          ></c-adds-explanation-item>
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
import {page, layout, media, form} from '@/mixins/components';
import cAddsExplanationItem from '@/components/content/adds/cAddsExplanationItem';

export default {
  name:'cAddsExplanation',
  mixins: [page, layout, media, form],
  components: { cAddsExplanationItem },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quiz: state => state.quiz,
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