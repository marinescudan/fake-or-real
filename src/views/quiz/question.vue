<template>
  <div class="wrapper vh-100" v-if="quiz">
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
  export default {
    name: 'question',
    components: { cQuadsQuestion, cDoublesQuestion, cSinglesQuestion },
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