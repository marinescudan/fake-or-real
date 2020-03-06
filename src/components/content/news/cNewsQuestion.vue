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
          <c-news-question-item
            :quizIndex="0" v-on:itemSelected="saveSelection"
          ></c-news-question-item>
        </c-col>
        <c-col class="c-w-6">
          <c-news-question-item
            :quizIndex="1" v-on:itemSelected="saveSelection"
          ></c-news-question-item>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-6">
          <c-news-question-item
            :quizIndex="2" v-on:itemSelected="saveSelection"
          ></c-news-question-item>
        </c-col>
        <c-col class="c-w-6">
          <c-news-question-item
            :quizIndex="3" v-on:itemSelected="saveSelection"
          ></c-news-question-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row v-if="!submited">
        <c-col class="c-w-4">
          <button type="button" class="frame"
            :disabled="!$store.state.quizList.length"
            @click="submitQuiz">{{ locale.QUESTION.CTA_GO_EXPLANATION }}</button>
        </c-col>
      </c-row>
      <c-row v-if="submited" class="pt4">
        <c-col class="c-w-12">
          <h1>{{ locale.QUESTION.SUBMIT_MESSAGE_HEADING}} {{selectedFakeNumber}}</h1>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cNewsQuestionItem from '@/components/content/news/cNewsQuestionItem';

export default {
  name:'cNewsQuestion',
  mixins: [page, layout, media, form],
  components: { cNewsQuestionItem },
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