<template>
  <c-row>
    <c-col class="c-w-8">
      <c-vimeo :videoId="quizData.items[this.itemIndex].vimeo_id"></c-vimeo>
      <!-- <c-vimeo :video-id="quizData.items[itemIndex].vimeo_id"></c-vimeo> -->
    </c-col>
    <c-col class="c-w-4">
      <h3 v-html="quizData.items[itemIndex].title"></h3>
      <p class="f2" v-html="quizData.items[itemIndex].click_count"></p>
    </c-col>
  </c-row>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cVideosStatsItem',
  mixins: [layout, media, form],
  props: {
    quizData: { type: Object, required: true },
    itemIndex: { type: Number, required: true }
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>