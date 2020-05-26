<template>
  <c-page class="vh-100" :rows="'20vh 66vh 14vh'">
    <c-header class="divider">
      <h1>{{ quiz.stats_title }}</h1>
      <h2>{{ quiz.stats_subtitle }}</h2>
    </c-header>
    <c-main :width="contentWidth">
      <c-row>
        <c-col class="c-w-6">
          <c-doubles-stats-item :quiz="quiz" :itemIndex="0"></c-doubles-stats-item>
        </c-col>
        <c-col class="c-w-6">
          <c-doubles-stats-item :quiz="quiz" :itemIndex="1"></c-doubles-stats-item>
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
import cDoublesStatsItem from '@/components/content/doubles/cDoublesStatsItem';
import cNextStep from '@/components/input/cNextStep';
export default {
  name:'cDoublesStats',
  mixins: [page, layout, media, form],
  components: { cDoublesStatsItem, cNextStep },
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