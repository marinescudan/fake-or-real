<template>
  <div class="wrapper vh-100" v-if="quiz">
    <c-quads-question v-if="quiz.contentType === 'quads'"></c-quads-question>
    <c-doubles-question v-if="quiz.contentType === 'doubles'"></c-doubles-question>
    <c-singles-question v-if="quiz.contentType === 'single'"></c-singles-question>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import cNewsQuestion from '@/components/content/quads/cNewsQuestion';
  import cDoublesQuestion from '@/components/content/doubles/cDoublesQuestion';
  import cSinglesQuestion from '@/components/content/singles/cSinglesQuestion';
  export default {
    name: 'question',
    components: { cNewsQuestion, cDoublesQuestion, cSinglesQuestion },
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