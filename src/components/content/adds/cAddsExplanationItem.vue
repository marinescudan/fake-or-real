<template>
  <div class="frame mb2 pa2"
    v-bind:class="[quizData.items[itemIndex].fake?'fake':'real']">
    <c-row >
      <c-col class="c-w-5">
        <c-figure :src="quizData.items[itemIndex].image_url"></c-figure>
      </c-col>
      <c-col class="c-w-7">
        <p>{{quizData.items[itemIndex].title}}</p>
      </c-col>
    </c-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cAddsExplanationItem',
  mixins: [layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      quizData: state => state.quiz,
    }),
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>