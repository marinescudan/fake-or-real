<template>
  <c-row class="c-adds-explanation-item">
    <c-col class="c-w-5">
      <c-figure :src="quizItem.image_url"></c-figure>
    </c-col>
    <c-col class="c-w-7">
      <h3 v-html="quizItem.title"></h3>
    </c-col>
  </c-row>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cAddsExplanationItem',
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