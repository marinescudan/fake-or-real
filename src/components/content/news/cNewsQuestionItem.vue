<template>
  <c-card class="c-news-question-item">
    <c-row class="">
      <c-col class="c-w-6">
        <c-figure :src="'https://picsum.photos/406/228'"></c-figure>
      </c-col>
      <c-col class="c-w-6">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum molli totam voluptatum mollitia corrupti veritatis id accusamus, excepturi?</p>
      </c-col>
    </c-row>
  </c-card>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cNewsQuestionItem',
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