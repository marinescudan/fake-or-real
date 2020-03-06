<template>
  <c-row class="c-news-explanation-item pb4"
    v-bind:class="{ 'fake': quizData.items[quizIndex].fake === true }">
    <c-col class="c-w-5">
      <c-figure :src="quizData.items[quizIndex].image_url"></c-figure>
    </c-col>
    <c-col class="c-w-7">
      <h3>{{quizData.items[quizIndex].title}}</h3>
    </c-col>
  </c-row>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cAddsExplanationItem',
  mixins: [layout, media, form],
  props: {
    quizIndex: { type: Number, required: true },
    quizData: { type: Object, required: true },
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>