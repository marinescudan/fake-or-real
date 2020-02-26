<template>
  <div class="c-videos-stats pt3">
    <c-row>
      <c-col class="c-w-12">
        <h2 class="pb4">{{ $t("STATS.SUB_TITLE")}}</h2>
      </c-col>
    </c-row>
    <c-row>
      <c-col class="c-w-6">
        <c-videos-stats-item :videosItem="videosItem"></c-videos-stats-item>
      </c-col>
      <c-col class="c-w-6">
        <c-videos-stats-item :videosItem="videosItem"></c-videos-stats-item>
      </c-col>
    </c-row>
    <c-row>
      <c-col class="c-w-6">
        <c-videos-stats-item :videosItem="videosItem"></c-videos-stats-item>
      </c-col>
      <c-col class="c-w-6">
        <c-videos-stats-item :videosItem="videosItem"></c-videos-stats-item>
      </c-col>
    </c-row>
  </div>
</template>

<script>
import {layout, media, form} from '@/mixin/components';
import cVideosStatsItem from '@/components/content/videos/cVideosStatsItem';

export default {
  name:'cVideosStats',
  mixins: [layout, media, form],
  components: { cVideosStatsItem },
  props: {
    videosData: { type: Object, required: false },
  },
  data: function () {
    return {
      videosItem: {
        num: 1
      }
    }
  },
  computed: { }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";

.c-videos-stats
  display: block

</style>