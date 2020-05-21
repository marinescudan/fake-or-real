<template>
    <c-row class="c-doubles-stats-item pt2 pr2 pb2 pl2">
      <c-col class="c-w-6">
        <c-figure :src="quiz.items[itemIndex].stats_media_url || quiz.items[itemIndex].question_media_url"></c-figure>
      </c-col>
      <c-col class="c-w-6">
        <h3>{{quiz.items[itemIndex].stats_title}}</h3>
        <p class="f2">{{quiz.items[itemIndex].click_count}}</p>
      </c-col>
    </c-row>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cDoublesStatsItem',
  mixins: [layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
    }),
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>