<template>
  <c-page>
    <c-header>
      <h1>{{ quiz.stats_title }}</h1>
      <h2>{{ quiz.stats_subtitle }}</h2>
    </c-header>
    <c-main>
      <c-row>
        <c-col class="c-w-8">
          <c-singles-stats-item :quiz="quiz" :itemIndex="0"></c-singles-stats-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-next-step :page="'stats'"></c-next-step>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cSinglesStatsItem from '@/components/content/singles/cSinglesStatsItem';
import cNextStep from '@/components/input/cNextStep';

export default {
  name:'cSinglesStats',
  mixins: [page, layout, media, form],
  components: { cSinglesStatsItem, cNextStep },
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
</style>