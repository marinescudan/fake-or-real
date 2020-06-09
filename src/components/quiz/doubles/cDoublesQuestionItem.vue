<template>
  <div
    class="c-doubles-question-item frame pt2 pr2 pb2 pl2"  v-if="item"
    v-bind:class="{'selected': item.selected}"
    v-on:click="$emit('itemSelected', itemIndex, !item.selected)">
      <c-row>
        <c-col v-bind:class="dinamicClass">
          <c-media-viewer :itemIndex="itemIndex" :namespace="'question'"></c-media-viewer>
        </c-col>
        <c-col class="c-w-6" v-if="showTextSection">
          <h3 v-if="item.question_title">{{item.question_title}}</h3>
          <p v-if="item.question_text">{{item.question_text}}</p>
        </c-col>
      </c-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';

export default {
  name:'cDoublesQuestionItem',
  mixins: [page, layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
    }),
    item: function () { return this.quiz.items[this.itemIndex]},
    dinamicClass: function () { return this.showTextSection ? 'c-w-6':'c-w-12'; },
    showTextSection: function () { return  this.item.question_title || this.item.question_text ? true : false;},
  }
}
</script>
