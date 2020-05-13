<template>
  <div class="wrapper vh-100" v-if="quiz">
    <c-quads-explanation v-if="quiz.items.length === 4"></c-quads-explanation>
    <c-doubles-explanation v-if="quiz.items.length === 2"></c-doubles-explanation>
    <c-singles-explanation v-if="quiz.items.length === 1"></c-singles-explanation>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import cQuadsExplanation from '@/components/content/quads/cQuadsExplanation';
  import cDoublesExplanation from '@/components/content/doubles/cDoublesExplanation';
  import cSinglesExplanation from '@/components/content/singles/cSinglesExplanation';
  export default {
    name: 'question',
    components: { cQuadsExplanation, cDoublesExplanation, cSinglesExplanation },
    computed: {
      ...mapState({
        quiz: state => state.quiz
      })
    }
  }
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>