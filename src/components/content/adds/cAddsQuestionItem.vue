<template>
  <c-card class="c-adds-question-item">
    <c-row class="">
      <c-col class="c-w-6">
        <c-figure :src="'https://picsum.photos/800/400'"></c-figure>
      </c-col>
      <c-col class="c-w-6">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque?</p>
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
    addsItem: { type: Object, required: true },
  },
  computed: { }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";

.c-adds-question-item
  display: block

</style>