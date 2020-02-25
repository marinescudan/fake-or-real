<template>
  <c-card class="c-adds-stats-item">
    <c-row>
      <c-col class="c-w-6">
        <c-figure :src="'https://picsum.photos/800/400'"></c-figure>
      </c-col>
      <c-col class="c-w-6">
        <p>Lorem ipsum dolorsicing elit. Sed distinctio modi maiores quasi sunt totam.</p>
        <p class="f2">123</p>
      </c-col>
    </c-row>
  </c-card>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cAddsStatsItem',
  mixins: [layout, media, form],
  props: {
    addsItem: { type: Object, required: true },
  },
  computed: { }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";

.c-adds-stats-item
  display: block

</style>