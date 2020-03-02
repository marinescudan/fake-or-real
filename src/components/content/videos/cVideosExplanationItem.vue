<template>
    <c-row class="c-videos-explanation-item">
      <c-col class="c-w-6">
        <c-vimeo
          :videoId="'391952856'"
          :playerWidth="160"
          :playerHeight="80"
        ></c-vimeo>
        <!-- <c-vimeo :video-id="quizItem.video_id"></c-vimeo> -->
      </c-col>
      <c-col class="c-w-6">
        <h3 v-html="quizItem.title"></h3>
      </c-col>
    </c-row>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cVideosExplanationItem',
  mixins: [layout, media, form],
  props: {
    quizItem: { type: Object, required: true },
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>