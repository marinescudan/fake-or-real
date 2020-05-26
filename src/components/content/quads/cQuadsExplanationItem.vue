<template>
  <c-col class="mb4 c-w-6">
    <div class="frame"
      v-bind:class="[quiz.items[itemIndex].fake?'fake':'real']">
      <c-row>
        <c-col class="c-w-12">
          <c-figure :src="quiz.items[itemIndex].explanation_media_url || quiz.items[itemIndex].question_media_url"></c-figure>
          <p v-if="showTextSection">{{quiz.items[itemIndex].explanation_title}}</p>
        </c-col>
      </c-row>
    </div>
  </c-col>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cQuadsExplanationItem',
  mixins: [layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quiz: state => state.quiz,
      showTextSection: function () {
        return  this.quiz.items[this.itemIndex].explanation_title
                ? true : false;
      },
    }),
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>