<template>
  <div class="c-videos-question pt3">
    <c-row>
      <c-col class="c-w-12">
        <h2 class="pb4">{{ $t("QUESTION.SUB_TITLE")}}</h2>
      </c-col>
    </c-row>
    <c-row>
      <c-col class="c-w-8">
        <c-videos-question-item :videosItem="videosItem"></c-videos-question-item>
      </c-col>
    </c-row>
  </div>
</template>

<script>
import {layout, media, form} from '@/mixin/components';
import cVideosQuestionItem from '@/components/content/videos/cVideosQuestionItem';

export default {
  name:'cVideosQuestion',
  mixins: [layout, media, form],
  components: { cVideosQuestionItem },
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

.c-videos-question
  display: block

</style>