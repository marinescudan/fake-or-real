<template>
    <c-row class="c-videos-explanation-item">
      <c-col class="c-w-5">
        <c-vimeo :videoId="quizData.items[this.itemIndex].vimeo_id"></c-vimeo>
        <!-- <c-vimeo :video-id="quizData.vimeo_id"></c-vimeo> -->
      </c-col>
      <c-col class="c-w-7">
        <h3 v-html="quizData.items[this.itemIndex].title"></h3>
      </c-col>
    </c-row>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cVideosExplanationItem',
  mixins: [layout, media, form],
  props: {
    quizData: { type: Object, required: true },
    itemIndex: { type: Number, required: true }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>