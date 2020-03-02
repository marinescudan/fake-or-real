<template>
  <c-row class="c-news-explanation-item pb4"
    v-bind:class="{ 'selected' : quizItem.fake }">
    <c-col class="c-w-6">
      <c-figure :src="quizItem.image_url"></c-figure>
    </c-col>
    <c-col class="c-w-6">
      <h3 v-html="quizItem.title"></h3>
    </c-col>
  </c-row>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cNewsExplanationItem',
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