<template>
  <div class="explanation-page h-100" v-if="quiz">
    <c-quads-explanation v-if="quiz.items.length === 4"></c-quads-explanation>
    <c-doubles-explanation v-if="quiz.items.length === 2"></c-doubles-explanation>
    <c-singles-explanation v-if="quiz.items.length === 1"></c-singles-explanation>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import cQuadsExplanation from '@/components/quiz/quads/cQuadsExplanation';
  import cDoublesExplanation from '@/components/quiz/doubles/cDoublesExplanation';
  import cSinglesExplanation from '@/components/quiz/singles/cSinglesExplanation';
  import {page} from '@/mixins/components.js';
  export default {
    name: 'question',
    components: { cQuadsExplanation, cDoublesExplanation, cSinglesExplanation },
    mixins: [page],
    computed: {
      ...mapState({
        quiz: state => state.quiz
      })
    }
  }
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.c-page
  .c-header
    height: 20%
  .c-main
    height: 66%
    width: 96%
  .c-footer
    height: 14%

</style>