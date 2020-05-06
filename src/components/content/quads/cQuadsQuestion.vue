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
          <c-quads-question-item
            :quizIndex="0" v-on:itemSelected="saveSelection"
          ></c-quads-question-item>
        </c-col>
        <c-col class="c-w-6">
          <c-quads-question-item
            :quizIndex="1" v-on:itemSelected="saveSelection"
          ></c-quads-question-item>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-6">
          <c-quads-question-item
            :quizIndex="2" v-on:itemSelected="saveSelection"
          ></c-quads-question-item>
        </c-col>
        <c-col class="c-w-6">
          <c-quads-question-item
            :quizIndex="3" v-on:itemSelected="saveSelection"
          ></c-quads-question-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row v-if="!submited">
        <c-col class="c-w-12">
          <p class="tc">{{ quiz.question_cta_help || "Choose between the options above!" }}</p>
        </c-col>
      </c-row>
      <c-row v-if="!submited">
        <c-col class="c-w-4">
          <button type="button" class="frame"
            :disabled="!$store.state.quizList.length"
            @click="submitQuiz">{{ quiz.question_cta_go_explanation }}</button>
        </c-col>
      </c-row>
      <c-row v-if="submited" class="pt4">
        <c-col class="c-w-12">
          <h1>{{ quiz.question_submit_message_heading}} {{selectedFakeNumber}}</h1>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cQuadsQuestionItem from '@/components/content/quads/cQuadsQuestionItem';

export default {
  name:'cQuadsQuestion',
  mixins: [page, layout, media, form],
  components: { cQuadsQuestionItem },
  data: function () {
    return {
      submited: false,
      selectedFakeNumber: 0,
      contentWidth: 90
    };
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quiz: state => state.quiz,
    }),
  },
  methods: {
    saveSelection: function (itemIndex, selected) {
      this.selectedFakeNumber = selected ? this.selectedFakeNumber + 1 : this.selectedFakeNumber - 1;
      let newQuiz = Object.assign({}, this.quiz);
      newQuiz.items[itemIndex].selected = selected;
      this.$store.dispatch('setState', {
        key: 'quiz',
        value: newQuiz
      })
    },
    submitQuiz: function () {
      this.submited = true;
      this.$store.dispatch('setState', {
        key: 'quiz',
        value: this.quiz
      })
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