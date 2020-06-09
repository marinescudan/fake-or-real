<template>
  <c-row class="c-singles-question-item"  v-bind:class="{ 'submited' : submited}">
    <c-col class="c-w-6">
      <c-media-viewer :itemIndex="itemIndex" :namespace="'question'"></c-media-viewer>
    </c-col>
   <c-col class="c-w-4" style="justify-content: space-between;">
      <c-row>
        <c-col class="c-w-12">
          <h3>{{item.question_title}}</h3>
          <p>{{item.question_text}}</p>
        </c-col>
      </c-row>
      <c-row class="align-self-end">
        <c-col class="c-w-12">
          <c-row class="pt4">
            <c-col class="c-w-12">
              <p class="tc">{{ quiz.question_cta_help }}</p>
            </c-col>
          </c-row>
          <c-row>
            <c-col class="c-w-6">
              <button type="button" class="frame pt2 pb2"
                :class="{'disabled': submited}"
                :disabled="submited"
                @click="submitQuiz(true)">{{ quiz.question_cta_fake }}</button>
            </c-col>
            <c-col class="c-w-6">
              <button type="button" class="frame pt2 pb2"
                :class="{'disabled': submited}"
                :disabled="submited"
                @click="submitQuiz(false)">{{ quiz.question_cta_real }}</button>
            </c-col>
          </c-row>
          <c-modal :show="showModal">
            <h1 class="" :class="{'correct': correctQuess,'wrong': !correctQuess}">
              <span v-if="!item.fake">{{ quiz.question_single_result_message_real }}</span>
              <span v-if="item.fake">{{ quiz.question_single_result_message_fake }}</span>
            </h1>
          </c-modal>
        </c-col>
      </c-row>
    </c-col>
  </c-row>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, form, media} from '@/mixins/components';
export default {
  name:'cSinglesQuestionItem',
  mixins: [page, layout, form, media],
  props: {
    itemIndex: { type: Number, required: true }
  },
  data: function () {
    return {
      submited: false,
      showModal: false,
      correctQuess: null,
    };
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quiz: state => state.quiz,
      item: function (state) {return state.quiz.items[this.itemIndex]},
    }),
  },
  methods: {
    submitQuiz: function (choice) {
      this.correctQuess = this.item.fake === choice;
      this.submited = true;
      this.showModal = true;
      this.$store.dispatch('setState', { key: 'quiz', value: this.quiz}).then(()=>{
        setTimeout(()=>{ this.showModal = false; }, 2600);
        setTimeout(()=>{ this.$router.push({ path: `/explanation/${this.quiz.uuid}` }); }, 3000);
      });
    }
  }
}
</script>