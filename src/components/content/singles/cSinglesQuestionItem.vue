<template>
  <c-row class="c-singles-question-item">
    <c-col class="c-w-8">
      <c-media-viewer :itemIndex="itemIndex" namespace="question"></c-media-viewer>
    </c-col>
    <c-col class="c-w-4" style="justify-content: space-between;">
      <c-row>
        <c-col>
          <h3>{{quizData.items[itemIndex].title}}</h3>
          <p>{{quizData.items[itemIndex].text}}</p>
        </c-col>
      </c-row>
      <c-row v-if="!submited" class="pt4">
        <c-col class="c-w-6">
          <button type="button" class="frame pt2 pb2"
            @click="submitQuiz(true)">{{ quizData.question_cta_fake }}</button>
        </c-col>
        <c-col class="c-w-6">
          <button type="button" class="frame pt2 pb2"
            @click="submitQuiz(false)">{{ quizData.question_cta_real }}</button>
        </c-col>
      </c-row>
      <c-row v-if="submited" class="pt4">
        <c-col class="c-w-12">
          <h1 :class="{'dark-green': correctQuess,'dark-red': !correctQuess}">
            <span v-if="!quizData.items[itemIndex].fake">{{ quizData.question_single_result_message_real }}</span>
            <span v-if="quizData.items[itemIndex].fake">{{ quizData.question_single_result_message_fake }}</span>
          </h1>
        </c-col>
      </c-row>
    </c-col>
  </c-row>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';
import cMediaViewer from '@/components/media/cMediaViewer';

export default {
  name:'cSinglesQuestionItem',
  mixins: [layout, media, form],
  components: { cMediaViewer },
  props: {
    itemIndex: { type: Number, required: true }
  },
  data: function () {
    return {
      submited: false,
      correctQuess: null
    };
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quizData: state => state.quiz,
    }),
  },
  methods: {
    submitQuiz: function (choice) {
      this.submited = true;
      this.correctQuess = this.quizData.items[this.itemIndex].fake === choice;
      setTimeout(()=>{
        this.$router.push({ path: 'explanation' });
      }, 3000);
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>