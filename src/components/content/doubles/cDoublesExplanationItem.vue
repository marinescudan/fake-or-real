<template>
    <div class="frame mb3"
      v-bind:class="[quizData.items[itemIndex].fake?'fake':'real']">
      <c-row >
        <c-col v-bind:class="dinamicClass">
          <c-figure :src="quizData.items[itemIndex].explanation_media_url || quizData.items[itemIndex].question_media_url"></c-figure>
        </c-col>
        <c-col class="c-w-7" v-if="showTextSection">
          <p>{{quizData.items[itemIndex].explanation_title}}</p>
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
      quizData: state => state.quiz,
      dinamicClass: function () { return this.showTextSection ? 'c-w-5':'c-w-12'; },
      showTextSection: function () {
        return  this.quizData.items[this.itemIndex].explanation_title
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