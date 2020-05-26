<template>
  <c-page class="explanation-page vh-100" :rows="'12rem 1fr 10rem'">
    <c-header class="divider">
      <h1>{{ quiz.explanation_title }}</h1>
      <h2>{{  quiz.explanation_subtitle  }}</h2>
    </c-header>
    <c-main :width="contentWidth">
      <c-row>
        <c-col class="c-w-6">
          <c-row>
            <c-col class="c-w-12">
              <div class="user-input" v-html="quiz.contents"></div>
            </c-col>
          </c-row>
        </c-col>
        <c-col class="c-w-4">
          <c-singles-explanation-item :quiz="quiz" :itemIndex="0"></c-singles-explanation-item>
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
import {layout, media, form} from '@/mixins/components';
import cSinglesExplanationItem from '@/components/content/singles/cSinglesExplanationItem';
import cNextStep from '@/components/input/cNextStep';
export default {
  name:'cSinglesExplanation',
  mixins: [layout, media, form],
  components: { cSinglesExplanationItem, cNextStep },
  data: function () {
    return {
      contentWidth: 96
    };
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quiz: state => state.quiz,
      showStatsPageFlag: state => state.showStatsPageFlag,
    }),
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>