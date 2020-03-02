<template>
  <c-card class="c-adds-stats-item">
    <c-row>
      <c-col class="c-w-6">
        <c-figure :src="quizItem.image_url"></c-figure>
      </c-col>
      <c-col class="c-w-6">
        <h3 v-html="quizItem.title"></h3>
        <p class="f2" v-html="quizItem.false_count"></p>
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
    quizItem: { type: Object, required: true },
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>