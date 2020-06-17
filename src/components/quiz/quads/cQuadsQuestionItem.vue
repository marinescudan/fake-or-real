<template>
  <c-col class="c-quads-question-item" v-bind:class="{'c-w-3': !quiz.questionText, 'c-w-6': quiz.questionText }">
    <div class="frame pt2 pr2 pb2 pl2 mb4"
      v-if="quiz"
      v-bind:class="{'selected':item.selected}"
      v-on:click="$emit('itemSelected', itemIndex, !item.selected)">
      <c-row>
        <c-col v-bind:class="[quiz.questionText ? 'c-w-4':'c-w-12']">
          <c-media-viewer :itemIndex="itemIndex" :namespace="'question'"></c-media-viewer>
        </c-col>
        <c-col class="c-w-8" v-if="quiz.questionText">
          <h3 v-if="item.question_title">{{item.question_title}}</h3>
          <p v-if="item.question_text">{{item.question_text}}</p>
        </c-col>
      </c-row>
    </div>
  </c-col>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';

export default {
  name:'cQuadsQuestionItem',
  mixins: [page, layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
      item: function () {return this.quiz.items[this.itemIndex]},
    }),
  }
}
</script>
