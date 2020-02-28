<template>
  <c-page class="vh-100 pt3" :rows="'20vh 67vh 13vh'">
    <c-header class="divider">
      <!-- todo: add news question title variable -->
      <h1 class="pt5">{{ $t("QUESTION.TITLE")}}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row>
        <c-col class="c-w-12">
          <!-- todo: add news question subtitle variable -->
          <h2 class="pb4" v-if="!submited">{{ $t("QUESTION.SUBTITLE")}}</h2>
          <h2 class="pb4" v-if="submited">
            {{ $t("QUESTION.SUBTITLE_SUBMITED", {selectedFakeNumber: selectedFakeNumber})}}
          </h2>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-6">
          <c-news-question-item
            :quizIndex="0" :quizData="quiz"
            v-on:itemSelected="saveSelection"
          ></c-news-question-item>
        </c-col>
        <c-col class="c-w-6">
          <c-news-question-item
            :quizIndex="1" :quizData="quiz"
            v-on:itemSelected="saveSelection"
          ></c-news-question-item>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-6">
          <c-news-question-item
            :quizIndex="2" :quizData="quiz"
            v-on:itemSelected="saveSelection"
          ></c-news-question-item>
        </c-col>
        <c-col class="c-w-6">
          <c-news-question-item
            :quizIndex="3" :quizData="quiz"
            v-on:itemSelected="saveSelection"
          ></c-news-question-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row v-if="!submited" class="pt4">
        <c-col class="c-w-4">
          <button type="button" class="frameLight pt2 pb2"
            :disabled="!$store.state.quizList.length"
            @click="submitQuiz">{{ $t("QUESTION.CTA_GO_EXPLANATION")}}</button>
        </c-col>
      </c-row>
      <c-row v-if="submited" class="pt4">
        <c-col class="c-w-12">
          <h1>{{ $t("QUESTION.RESULT_MESSAGE", {realFakeNumber: realFakeNumber})}}</h1>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
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
      realFakeNumber: function () {
        let fakeNumber = 0;
        this.quiz.items.forEach(element => {
          if (element.fake) fakeNumber++;
        });
        return fakeNumber;
      }
  },
  props: {
    quiz: { type: Object, required: true }
  },
  methods: {
    saveSelection: function (itemIndex, selected) {
      this.selectedFakeNumber = selected ? this.selectedFakeNumber + 1 : this.selectedFakeNumber - 1;
      this.quiz.items[itemIndex].selected = selected;
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
        }, 2000);
      });
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>