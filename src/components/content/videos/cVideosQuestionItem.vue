<template>
  <c-card class="c-videos-question-item">
    <c-row class="">
      <c-col class="c-w-8">
        <!-- <c-figure :src="'https://picsum.photos/800/600'"></c-figure> -->
        <c-video :src="'https://picsum.photos/800/600'"></c-video>
      </c-col>
      <c-col class="c-w-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque?</p>
      </c-col>
    </c-row>
  </c-card>
</template>

<script>
import {layout, media, form} from '@/mixin/components';

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