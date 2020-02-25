<template>
  <c-row class="c-news-explanation-item pb4">
    <c-col class="c-w-6">
      <c-figure :src="'https://picsum.photos/275/155'"></c-figure>
    </c-col>
    <c-col class="c-w-6">
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.?</h3>
    </c-col>
  </c-row>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cNewsExplanationItem',
  mixins: [layout, media, form],
  props: {
    newsItem: { type: Object, required: true },
  },
  computed: { }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";

.c-news-question-item
  display: block

</style>