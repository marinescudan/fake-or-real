<template>
  <div
    class="c-doubles-question-item frame pt2 pr2 pb2 pl2"
    v-if="quizData"
    v-bind:class="[quizData.items[itemIndex].selected?'selected':'', quizData.items[itemIndex].fake?'fake':'real']"
    v-on:click="$emit('itemSelected', itemIndex, !quizData.items[itemIndex].selected)">
      <c-row>
        <c-col class="c-w-6">
          <c-figure :src="quizData.items[itemIndex].question_media_url"></c-figure>
        </c-col>
        <c-col class="c-w-6">
          <h3>{{quizData.items[itemIndex].title}}</h3>
          <p>{{quizData.items[itemIndex].text}}</p>
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
      quizData: state => state.quiz,
    }),
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>