<template>
  <c-page>
    <c-header class="divider">
      <h1>{{ quiz.question_title }}</h1>
      <h2>{{ quiz.question_subtitle }}</h2>
    </c-header>
    <c-main>
      <c-row>
        <c-col class="c-w-12">
          <c-singles-question-item :quiz="quiz" :itemIndex="0"></c-singles-question-item>
        </c-col>
      </c-row>
    </c-main>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cSinglesQuestionItem from './cSinglesQuestionItem';

export default {
  name:'cSinglesQuestion',
  components: { cSinglesQuestionItem },
  mixins: [page, layout, media, form],
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
.c-page .c-main
  height: 80%
</style>