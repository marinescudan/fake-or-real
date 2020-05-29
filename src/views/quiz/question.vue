<template>
  <div class="question-page h-100" v-if="quiz">
    <c-quads-question v-if="quiz.items.length === 4"></c-quads-question>
    <c-doubles-question v-if="quiz.items.length === 2"></c-doubles-question>
    <c-singles-question v-if="quiz.items.length === 1"></c-singles-question>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import cQuadsQuestion from '@/components/content/quads/cQuadsQuestion';
  import cDoublesQuestion from '@/components/content/doubles/cDoublesQuestion';
  import cSinglesQuestion from '@/components/content/singles/cSinglesQuestion';
  import {page} from '@/mixins/components.js';

  export default {
    name: 'question',
    components: { cQuadsQuestion, cDoublesQuestion, cSinglesQuestion },
    mixins: [page],
    computed: {
      ...mapState({
        quiz: state => state.quiz
      })
    },
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