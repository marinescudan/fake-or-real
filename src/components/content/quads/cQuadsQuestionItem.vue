<template>
  <div
    class="c-quads-question-item frame pt2 pr2 pb2 pl2 mb3"
    v-if="quizData"
    v-bind:class="[quizData.items[quizIndex].selected?'selected':'', quizData.items[quizIndex].fake?'fake':'real']"
    v-on:click="$emit('itemSelected', quizIndex, !quizData.items[quizIndex].selected)">
    <c-row>
      <c-col class="c-w-6">
        <c-figure :src="quizData.items[quizIndex].question_media_url"></c-figure>
      </c-col>
      <c-col class="c-w-6">
        <h3>{{quizData.items[quizIndex].question_title}}</h3>
        <p>{{quizData.items[quizIndex].question_text}}</p>
      </c-col>
    </c-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cQuadsQuestionItem',
  mixins: [layout, media, form],
  props: {
    quizIndex: { type: Number, required: true },
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