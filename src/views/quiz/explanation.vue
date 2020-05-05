<template>
  <div class="wrapper vh-100" v-if="quiz">
    <c-quads-explanation v-if="quiz.contentType === 'quads'"></c-quads-explanation>
    <c-doubles-explanation v-if="quiz.contentType === 'doubles'"></c-doubles-explanation>
    <c-singles-explanation v-if="quiz.contentType === 'single'"></c-singles-explanation>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import cNewsExplanation from '@/components/content/quads/cNewsExplanation';
  import cDoublesExplanation from '@/components/content/doubles/cDoublesExplanation';
  import cSinglesExplanation from '@/components/content/singles/cSinglesExplanation';
  export default {
    name: 'question',
    components: { cNewsExplanation, cDoublesExplanation, cSinglesExplanation },
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