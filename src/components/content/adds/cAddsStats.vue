<template>
  <div class="c-adds-stats pt3">
    <c-row>
      <c-col class="c-w-12">
        <h2 class="pb4">{{ $t("STATS.SUBTITLE")}}</h2>
      </c-col>
    </c-row>
    <c-row>
      <c-col class="c-w-6">
        <c-adds-stats-item :addsItem="addsItem"></c-adds-stats-item>
      </c-col>
      <c-col class="c-w-6">
        <c-adds-stats-item :addsItem="addsItem"></c-adds-stats-item>
      </c-col>
    </c-row>
    <c-row>
      <c-col class="c-w-6">
        <c-adds-stats-item :addsItem="addsItem"></c-adds-stats-item>
      </c-col>
      <c-col class="c-w-6">
        <c-adds-stats-item :addsItem="addsItem"></c-adds-stats-item>
      </c-col>
    </c-row>
  </div>
</template>

<script>
import {layout, media, form} from '@/mixins/components';
import cAddsStatsItem from '@/components/content/adds/cAddsStatsItem';

export default {
  name:'cAddsStats',
  mixins: [layout, media, form],
  components: { cAddsStatsItem },
  props: {
    addsData: { type: Object, required: false },
  },
  data: function () {
    return {
      addsItem: {
        num: 1
      }
    }
  },
  computed: { }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";

.c-adds-stats
  display: block

</style>