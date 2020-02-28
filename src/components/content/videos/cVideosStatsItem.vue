<template>
  <c-row>
    <c-col class="c-w-8">
      <c-vimeo
        :videoId="'391952856'"
        :playerWidth="380"
        :playerHeight="190"
      ></c-vimeo>
      <!-- <c-vimeo :video-id="quizItem.video_id"></c-vimeo> -->
    </c-col>
    <c-col class="c-w-4">
      <h3 v-html="quizItem.title"></h3>
      <p class="f2" v-html="quizItem.false_count"></p>
    </c-col>
  </c-row>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cVideosStatsItem',
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