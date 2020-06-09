<template>
  <c-row>
    <c-col class="c-w-6">
      <c-media-viewer :itemIndex="itemIndex" :namespace="'stats'"></c-media-viewer>
    </c-col>
    <c-col class="c-w-4">
      <h3>{{item.stats_title}}</h3>
      <p class="h2">{{item.click_count}}</p>
    </c-col>
  </c-row>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';

export default {
  name:'cSinglesStatsItem',
  mixins: [page, layout, media, form],
  props: {
    itemIndex: { type: Number, required: true }
  },
  computed: {
    ...mapState({
      item: function (state) {return state.quiz.items[this.itemIndex]},
    }),
  },
}
</script>