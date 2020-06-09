<template>
  <c-page>
    <c-header>
      <h1>{{ quiz.explanation_title }}</h1>
      <h2>{{  quiz.explanation_subtitle  }}</h2>
    </c-header>
    <c-main>
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
import {page, layout, media, form} from '@/mixins/components';
import cSinglesExplanationItem from './cSinglesExplanationItem';

export default {
  name:'cSinglesExplanation',
  components: { cSinglesExplanationItem },
  mixins: [page, layout, media, form],
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