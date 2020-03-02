<template>
  <div
    class="c-news-question-item frameLight pt2 pr2 pb2 pl2 mb3"
    v-if="quizData"
    v-bind:class="{ 'selected' : selected, 'fake': quizData.items[quizIndex].fake === true }"
    v-on:click="selected =!selected; $emit('itemSelected', quizIndex, selected)">
    <c-row>
      <c-col class="c-w-6">
        <c-figure :src="quizData.items[quizIndex].image_url"></c-figure>
      </c-col>
      <c-col class="c-w-6">
        <h3>{{quizData.items[quizIndex].title}}</h3>
        <p>{{quizData.items[quizIndex].text}}</p>
      </c-col>
    </c-row>
  </div>
</template>

<script>

// import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cNewsQuestionItem',
  mixins: [layout, media, form],
  data: function () {
    return {
      selected: false
    };
  },
  props: {
    quizIndex: { type: Number, required: true },
    quizData: { type: Object, required: true },
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>