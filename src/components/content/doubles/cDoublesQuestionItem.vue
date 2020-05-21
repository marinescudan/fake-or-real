<template>
  <div
    class="c-doubles-question-item frame pt2 pr2 pb2 pl2"
    v-if="quiz"
    v-bind:class="[quiz.items[itemIndex].selected?'selected':'', quiz.items[itemIndex].fake?'fake':'real']"
    v-on:click="$emit('itemSelected', itemIndex, !quiz.items[itemIndex].selected)">
      <c-row>
        <c-col v-bind:class="dinamicClass">
          <c-figure :src="quiz.items[itemIndex].question_media_url"></c-figure>
        </c-col>
        <c-col class="c-w-6" v-if="showTextSection">
          <h3 v-if="quiz.items[itemIndex].explanation_title">{{quiz.items[itemIndex].explanation_title}}</h3>
          <p v-if="quiz.items[itemIndex].question_text">{{quiz.items[itemIndex].question_text}}</p>
        </c-col>
      </c-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cDoublesQuestionItem',
  mixins: [layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
      dinamicClass: function () {
        return this.showTextSection ? 'c-w-6':'c-w-12';
      },
      showTextSection: function () {
        return  this.quiz.items[this.itemIndex].question_title
                || this.quiz.items[this.itemIndex].question_text
                ? true : false;
      },
    }),
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>