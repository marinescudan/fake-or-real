<template>
  <c-col class="c-quads-question-item" v-bind:class="{'c-w-3': !hasText, 'c-w-6': hasText }">
    <div class="frame pt2 pr2 pb2 pl2 mb4"
      v-if="quiz"
      v-bind:class="[item.selected?'selected':'', item.fake?'fake':'real']"
      v-on:click="$emit('itemSelected', itemIndex, !item.selected)">
      <c-row>
        <c-col v-bind:class="dinamicClass">
          <c-figure
            :src="item.question_media_url"
            :alt="item.question_media_url"
            :title="item.question_title"
            :width="hasText ? '60%': '100%'"
            :height="hasText ? '60%': '100%'"
            :expandable="true"
          ></c-figure>
        </c-col>
        <c-col class="c-w-7" v-if="hasText && showTextSection">
          <h3>{{item.question_title}}</h3>
          <p>{{item.question_text}}</p>
        </c-col>
      </c-row>
    </div>
  </c-col>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cQuadsQuestionItem',
  mixins: [layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
    }),
    item: function () {return this.quiz.items[this.itemIndex]},
    dinamicClass: function () { return this.showTextSection ? 'c-w-5':'c-w-12'; },
    showTextSection: function () { return  this.item.question_title || this.item.question_text ? true : false; },
    hasText: function () {
      let hasText = false;
      this.quiz.items.forEach((each)=>{
        if ( each.question_title || each.question_text ) {
          hasText = true;
        }
      });
      return  hasText;
    },
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>