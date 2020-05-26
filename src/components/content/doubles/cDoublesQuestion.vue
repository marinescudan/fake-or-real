<template>
  <c-page class="vh-100 pt3" :rows="'12rem 1fr 10rem'" v-bind:class="{ 'submited' : submited}">
    <c-header class="divider">
      <h1 class="pt5">{{ quiz.question_title }}</h1>
      <h2>{{ quiz.question_subtitle }}</h2>
    </c-header>
    <c-main :width="contentWidth">
      <!-- <c-row class="pt3 pb3">
        <c-col class="c-w-12">
        </c-col>
      </c-row> -->
      <c-row>
        <c-col class="c-w-6">
          <c-doubles-question-item
          :itemIndex="0" v-on:itemSelected="saveSelection"
          ></c-doubles-question-item>
        </c-col>
        <c-col class="c-w-6">
          <c-doubles-question-item
          :itemIndex="1" v-on:itemSelected="saveSelection"
          ></c-doubles-question-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row v-if="!submited" class="pt1">
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
      <h1 class="" :class="{'correct': correct,'wrong': !correct}">
        <span v-if="!correct">{{ quiz.question_submit_message_correct }}</span>
        <span v-if="correct">{{ quiz.question_submit_message_wrong }}</span>
      </h1>
    </c-modal>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cDoublesQuestionItem from '@/components/content/doubles/cDoublesQuestionItem';
import cModal from '@/components/container/cModal';

export default {
  name:'cDoublesQuestion',
  mixins: [page, layout, media, form ],
  components: { cDoublesQuestionItem, cModal },
  data: function () {
    return {
      submited: false,
      correct: false,
      contentWidth: 96,
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
        setTimeout(()=>{ this.showModal = false; }, 2000);
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