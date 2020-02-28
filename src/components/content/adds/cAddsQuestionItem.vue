<template>
  <c-card class="c-adds-question-item">
    <c-row class="">
      <c-col class="c-w-6">
        <c-figure :src="quizItem.image_url"></c-figure>
      </c-col>
      <c-col class="c-w-6">
        <h3 v-html="quizItem.title"></h3>
        <p v-html="quizItem.text"></p>
      </c-col>
    </c-row>
  </c-card>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cAddsQuestionItem',
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