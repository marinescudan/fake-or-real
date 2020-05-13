<template>
  <c-page class="vh-100 pt3" :rows="'20vh 66vh 14vh'" v-bind:class="{ 'submited' : submited}">
    <c-header class="divider">
      <h1 class="pt5">{{ quiz.question_title }}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row class="pt3 pb3">
        <c-col class="c-w-12">
          <h2>{{ quiz.question_subtitle }}</h2>
        </c-col>
      </c-row>
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
      <c-row v-if="submited" class="pt4">
        <c-col class="c-w-12">
          <h1 class="dark-green" v-if="correct">{{ quiz.question_submit_message_correct}}</h1>
          <h1 class="dark-red" v-if="!correct">{{ quiz.question_submit_message_wrong}}</h1>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cDoublesQuestionItem from '@/components/content/doubles/cDoublesQuestionItem';

export default {
  name:'cDoublesQuestion',
  mixins: [page, layout, media, form],
  components: { cDoublesQuestionItem },
  data: function () {
    return {
      submited: false,
      correct: false,
      contentWidth: 90,
      hasSelection: false
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
      this.$store.dispatch('setState', { key: 'quiz', value: this.quiz})
      .then(()=>{
        setTimeout(()=>{
          this.$router.push({ path: 'explanation' });
        }, 3000);
      });
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>