<template>
  <div class="stats-page h-100" v-if="quiz">
    <c-quads-stats v-if="quiz.items.length === 4"></c-quads-stats>
    <c-doubles-stats v-if="quiz.items.length === 2"></c-doubles-stats>
    <c-singles-stats v-if="quiz.items.length === 1"></c-singles-stats>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import cQuadsStats from '@/components/quiz/quads/cQuadsStats';
  import cSinglesStats from '@/components/quiz/singles/cSinglesStats';
  import cDoublesStats from '@/components/quiz/doubles/cDoublesStats';
  import {page} from '@/mixins/components.js';
  export default {
    name: 'question',
    components: { cQuadsStats, cDoublesStats, cSinglesStats },
    mixins: [page],
    computed: {
      ...mapState({
        quiz: state => state.quiz
      })
    }
  }
</script>

<style lang="sass">
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