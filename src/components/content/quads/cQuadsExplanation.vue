<template>
  <c-page class="explanation-page vh-100 pt3" :rows="'20vh 66vh 14vh'">
    <c-header class="divider">
      <h1 class="pt5">{{  quiz.explanation_title }}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row class="pt3 pb3">
        <c-col class="c-w-12">
          <h2>{{  quiz.explanation_subtitle  }}</h2>
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
          <c-quads-explanation-item
            :itemIndex="0" :quizData="quiz"
          ></c-quads-explanation-item>
          <c-quads-explanation-item
            :itemIndex="1" :quizData="quiz"
          ></c-quads-explanation-item>
          <c-quads-explanation-item
            :itemIndex="2" :quizData="quiz"
          ></c-quads-explanation-item>
          <c-quads-explanation-item
            :itemIndex="3" :quizData="quiz"
          ></c-quads-explanation-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-next-step :page="'explanation'"></c-next-step>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cQuadsExplanationItem from '@/components/content/quads/cQuadsExplanationItem';
import cNextStep from '@/components/input/cNextStep';
export default {
  name:'cQuadsExplanation',
  mixins: [page, layout, media, form],
  components: { cQuadsExplanationItem, cNextStep },
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
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>