<template>
  <c-card class="c-videos-explanation-item">
    <c-row class="">
      <c-col class="c-w-5">
        <c-figure :src="'https://picsum.photos/800/400'"></c-figure>
      </c-col>
      <c-col class="c-w-7">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi?</p>
      </c-col>
    </c-row>
  </c-card>
</template>

<script>
import {layout, media, form} from '@/mixin/components';

export default {
  name:'cVideosExplanationItem',
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