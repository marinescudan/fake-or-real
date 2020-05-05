<template>
  <div class="wrapper vh-100" v-if="quiz">
    <c-quads-stats v-if="quiz.contentType === 'quads'"></c-quads-stats>
    <c-doubles-stats v-if="quiz.contentType === 'doubles'"></c-doubles-stats>
    <c-singles-stats v-if="quiz.contentType === 'single'"></c-singles-stats>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import cQuadsStats from '@/components/content/quads/cQuadsStats';
  import cSinglesStats from '@/components/content/singles/cSinglesStats';
  import cDoublesStats from '@/components/content/doubles/cDoublesStats';
  export default {
    name: 'question',
    components: { cQuadsStats, cDoublesStats, cSinglesStats },
    computed: {
      ...mapState({
        quiz: state => state.quiz
      })
    }
  }
</script>

<style lang="sass">
  // @import "@/styles/_variables.sass";
  // @import "@/styles/_mixins.sass";
</style>