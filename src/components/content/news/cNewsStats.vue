<template>
  <div class="c-news-stats pt3">
    <c-row>
      <c-col class="c-w-12">
        <h2 class="pb4">{{ $t("STATS.SUBTITLE")}}</h2>
      </c-col>
    </c-row>
    <c-row>
      <c-col class="c-w-6">
        <c-news-stats-item :newsItem="newsItem"></c-news-stats-item>
      </c-col>
      <c-col class="c-w-6">
        <c-news-stats-item :newsItem="newsItem"></c-news-stats-item>
      </c-col>
    </c-row>
    <c-row>
      <c-col class="c-w-6">
        <c-news-stats-item :newsItem="newsItem"></c-news-stats-item>
      </c-col>
      <c-col class="c-w-6">
        <c-news-stats-item :newsItem="newsItem"></c-news-stats-item>
      </c-col>
    </c-row>
  </div>
</template>

<script>
import {layout, media, form} from '@/mixins/components';
import cNewsStatsItem from '@/components/content/news/cNewsStatsItem';

export default {
  name:'cNewsStats',
  mixins: [layout, media, form],
  components: { cNewsStatsItem },
  props: {
    newsData: { type: Object, required: false },
  },
  data: function () {
    return {
      newsItem: {
        num: 1
      }
    }
  },
  computed: { }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";

.c-news-stats
  display: block

</style>