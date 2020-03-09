<template>
    <c-row class="c-news-stats-item pt2 pr2 pb2 pl2 mb3">
      <c-col class="c-w-6">
        <c-figure :src="quizData.items[itemIndex].image_url"></c-figure>
      </c-col>
      <c-col class="c-w-6">
        <h3 v-html="quizData.items[itemIndex].title"></h3>
        <p class="f2">{{quizData.items[itemIndex].click_count}}</p>
      </c-col>
    </c-row>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cNewsStatsItem',
  mixins: [layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      quizData: state => state.quiz,
    }),
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>
