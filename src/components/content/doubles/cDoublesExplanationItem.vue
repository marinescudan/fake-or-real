<template>
    <div class="frame"
      v-bind:class="[quiz.items[itemIndex].fake?'fake':'real']">
      <c-row >
        <c-col class="c-w-12">
          <c-figure :src="quiz.items[itemIndex].explanation_media_url || quiz.items[itemIndex].question_media_url"></c-figure>
        </c-col>
        <c-col class="c-w-12" v-if="quiz.items[this.itemIndex].explanation_title">
          <p>{{quiz.items[itemIndex].explanation_title}}</p>
        </c-col>
      </c-row>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cDoublesExplanationItem',
  mixins: [layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
    }),
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>