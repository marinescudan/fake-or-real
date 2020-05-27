<template>
    <c-row class="c-quads-stats-item pt2 pr2 pb2 pl2 mb3">
      <c-col class="c-w-6">
        <c-figure
          :src="item.stats_media_url || item.question_media_url"
          :alt="item.stats_media_url || item.question_media_url"
          :title="item.stats_title"
        ></c-figure>
      </c-col>
      <c-col class="c-w-6">
        <h3 v-html="item.stats_title"></h3>
        <p class="f2">{{item.click_count}}</p>
      </c-col>
    </c-row>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cQuadsStatsItem',
  mixins: [layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
    }),
    item: function () {return this.quiz.items[this.itemIndex]},
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>
