<template>
  <c-page class="vh-100" :rows="'20vh 66vh 14vh'">
    <c-header class="divider">
      <h1>{{ quiz.stats_title }}</h1>
      <h2>{{ quiz.stats_subtitle }}</h2>
    </c-header>
    <c-main :width="contentWidth">
      <c-row>
        <c-col class="c-w-6">
          <c-quads-stats-item :quiz="quiz" :itemIndex="0"></c-quads-stats-item>
        </c-col>
        <c-col class="c-w-6">
          <c-quads-stats-item :quiz="quiz" :itemIndex="1"></c-quads-stats-item>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-6">
          <c-quads-stats-item :quiz="quiz" :itemIndex="2"></c-quads-stats-item>
        </c-col>
        <c-col class="c-w-6">
          <c-quads-stats-item :quiz="quiz" :itemIndex="3"></c-quads-stats-item>
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
import cQuadsStatsItem from '@/components/content/quads/cQuadsStatsItem';
import cNextStep from '@/components/input/cNextStep';
export default {
  name:'cQuadsStats',
  mixins: [page, layout, media, form],
  components: { cQuadsStatsItem, cNextStep },
  data: function () {
    return {
      contentWidth: 96
    };
  },
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