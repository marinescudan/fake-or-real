<template>
    <c-row class="c-videos-explanation-item">
      <c-col class="c-w-6">
        <c-figure :src="'https://picsum.photos/275/155'"></c-figure>
      </c-col>
      <c-col class="c-w-6">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi?</p>
      </c-col>
    </c-row>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

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