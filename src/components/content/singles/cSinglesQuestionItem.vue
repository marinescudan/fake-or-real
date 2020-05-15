<template>
  <c-row class="c-singles-question-item"  v-bind:class="{ 'submited' : submited}">
    <c-col class="c-w-8">
      <c-media-viewer :itemIndex="itemIndex" namespace="question"></c-media-viewer>
    </c-col>
    <c-col class="c-w-4" style="justify-content: space-between;">
      <c-row>
        <c-col class="c-w-12">
          <h3>{{quizData.items[itemIndex].question_title}}</h3>
          <p>{{quizData.items[itemIndex].question_text}}</p>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-12">
          <c-row class="pt4">
            <c-col class="c-w-12">
              <p class="tc">{{ quizData.question_cta_help }}</p>
            </c-col>
          </c-row>
          <c-row>
            <c-col class="c-w-6">
              <button type="button" class="frame pt2 pb2"
                :class="{'disabled': submited}"
                :disabled="submited"
                @click="submitQuiz(true)">{{ quizData.question_cta_fake }}</button>
            </c-col>
            <c-col class="c-w-6">
              <button type="button" class="frame pt2 pb2"
                :class="{'disabled': submited}"
                :disabled="submited"
                @click="submitQuiz(false)">{{ quizData.question_cta_real }}</button>
            </c-col>
          </c-row>
          <c-modal :show="showModal">
            <h1 class="" :class="{'correct': correctQuess,'wrong': !correctQuess}">
              <span v-if="!quizData.items[itemIndex].fake">{{ quizData.question_single_result_message_real }}</span>
              <span v-if="quizData.items[itemIndex].fake">{{ quizData.question_single_result_message_fake }}</span>
            </h1>
          </c-modal>
        </c-col>
      </c-row>
    </c-col>
  </c-row>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';
import cMediaViewer from '@/components/media/cMediaViewer';
import cModal from '@/components/container/cModal';

export default {
  name:'cSinglesQuestionItem',
  mixins: [layout, media, form],
  components: { cMediaViewer, cModal },
  props: {
    itemIndex: { type: Number, required: true }
  },
  data: function () {
    return {
      submited: false,
      showModal: false,
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
      this.correctQuess = this.quizData.items[this.itemIndex].fake === choice;
      this.submited = true;
      this.showModal = true;
      setTimeout(()=>{
        this.showModal = false;
      }, 1600);
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