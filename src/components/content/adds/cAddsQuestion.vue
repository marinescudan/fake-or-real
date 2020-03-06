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
          <c-adds-question-item
          :quizIndex="0" v-on:itemSelected="saveSelection"
          ></c-adds-question-item>
        </c-col>
        <c-col class="c-w-6">
          <c-adds-question-item
          :quizIndex="1" v-on:itemSelected="saveSelection"
          ></c-adds-question-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row v-if="!submited" class="pt1">
        <c-col class="c-w-4">
          <button type="button" class="frame"
            :disabled="!$store.state.quizList.length"
            @click="submitQuiz">{{ locale.QUESTION.CTA_GO_EXPLANATION }}</button>
        </c-col>
      </c-row>
      <c-row v-if="submited" class="pt4">
        <c-col class="c-w-12">
          <h1 class="dark-green" v-if="correct">{{ locale.QUESTION.SUBMIT_MESSAGE_CORRECT}}</h1>
          <h1 class="dark-red" v-if="!correct">{{ locale.QUESTION.SUBMIT_MESSAGE_WRONG}}</h1>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cAddsQuestionItem from '@/components/content/adds/cAddsQuestionItem';

export default {
  name:'cAddsQuestion',
  mixins: [page, layout, media, form],
  components: { cAddsQuestionItem },
  data: function () {
    return {
      submited: false,
      correct: false,
      contentWidth: 90
    };
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
      locale: state => state.locale,
    }),
  },
  methods: {
    saveSelection (itemIndex, selected) {
      let newQuiz = Object.assign({}, this.quiz);
      this.correct = newQuiz.items[itemIndex].fake && selected;
      newQuiz.items.forEach( (each, i) => {
        if (itemIndex === i) {
          each.selected = selected;
        } else {
          each.selected = false;
        }
      });
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