<template>
    <c-row class="c-quads-stats-item pt2 pr2 pb2 pl2 mb3">
      <c-col class="c-w-6">
        <c-media-viewer :itemIndex="itemIndex" :namespace="'stats'"></c-media-viewer>
      </c-col>
      <c-col class="c-w-6">
        <h3 v-html="item.stats_title || item.question_title"></h3>
        <p class="h2">{{item.click_count}}</p>
      </c-col>
    </c-row>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';

export default {
  name:'cQuadsStatsItem',
  mixins: [page, layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
      item: function () {return this.quiz.items[this.itemIndex]},
    }),
  },
}
</script>
