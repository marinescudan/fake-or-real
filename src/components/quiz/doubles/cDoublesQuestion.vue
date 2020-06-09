<template>
  <c-page v-bind:class="{ 'submited' : submited}">
    <c-header>
      <h1 class="pt5">{{ quiz.question_title }}</h1>
      <h2>{{ quiz.question_subtitle }}</h2>
    </c-header>
    <c-main>
      <c-row>
        <c-col class="c-w-4" v-bind:class="{'c-w-6': hasText}">
          <c-doubles-question-item
          :itemIndex="0" v-on:itemSelected="saveSelection"
          ></c-doubles-question-item>
        </c-col>
        <c-col class="c-w-4" v-bind:class="{'c-w-6': hasText}">
          <c-doubles-question-item
          :itemIndex="1" v-on:itemSelected="saveSelection"
          ></c-doubles-question-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row v-if="!submited">
        <c-col class="c-w-12">
          <p class="tc">{{ quiz.question_cta_help }}</p>
        </c-col>
      </c-row>
      <c-row v-if="!submited">
        <c-col class="c-w-4">
          <button type="button" class="frame"
             v-bind:class="{ 'disabled' : disabled }"
            :disabled="disabled"
            @click="submitQuiz">{{ quiz.question_cta_go_explanation }}</button>
        </c-col>
      </c-row>
    </c-footer>
    <c-modal :show="showModal">
      <h1 :class="{'correct': correct,'wrong': !correct}">
        <span v-if="correct">{{ quiz.question_submit_message_correct }}</span>
        <span v-if="!correct">{{ quiz.question_submit_message_wrong }}</span>
      </h1>
    </c-modal>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cDoublesQuestionItem from './cDoublesQuestionItem';

export default {
  name:'cDoublesQuestion',
  components: { cDoublesQuestionItem },
  mixins: [page, layout, media, form],
  data: function () {
    return {
      submited: false,
      correct: false,
      hasSelection: false,
      showModal: false,
    };
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
      locale: state => state.locale,
      disabled: function () { return !this.hasSelection;}
    }),
    hasText: function () {
      let hasText = false;
      this.quiz.items.forEach((each)=>{
        if ( each.question_title || each.question_text ) {
          hasText = true;
        }
      });
      return  hasText;
    },
  },
  methods: {
    saveSelection (itemIndex, selected) {
      let newQuiz = Object.assign({}, this.quiz);
      this.correct = newQuiz.items[itemIndex].fake && selected;

      newQuiz.items.forEach( (each, i) => {
        if (itemIndex === i) each.selected = selected;
        else each.selected = false;
      });
      this.hasSelection = selected;

      this.$store.dispatch('setState', {
        key: 'quiz',
        value: newQuiz
      })
    },
    submitQuiz: function () {
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

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>