<template>
  <c-card class="c-videos-question-item">
    <c-row class="">
      <c-col class="c-w-8">
        <c-vimeo :video-id="'391952856'"></c-vimeo>
      </c-col>
      <c-col class="c-w-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque?</p>
      </c-col>
    </c-row>
  </c-card>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cVideosQuestionItem',
  mixins: [layout, media, form],
  props: {
    videosItem: { type: Object, required: true },
  },
  computed: { }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";

.c-videos-question-item
  display: block

</style>