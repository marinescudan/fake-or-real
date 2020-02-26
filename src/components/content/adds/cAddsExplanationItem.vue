<template>
  <c-row class="c-adds-explanation-item">
    <c-col class="c-w-5">
      <c-figure :src="'https://picsum.photos/800/400'"></c-figure>
    </c-col>
    <c-col class="c-w-7">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi?</p>
    </c-col>
  </c-row>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cAddsExplanationItem',
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