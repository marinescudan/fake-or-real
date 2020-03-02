<template>
  <c-row class="c-videos-question-item">
    <c-col class="c-w-8">
      <c-vimeo :videoId="quizData.items[this.itemIndex].vimeo_id"></c-vimeo>
    </c-col>
    <c-col class="c-w-4" style="justify-content: space-between;">
      <c-row>
        <c-col>
          <h3>{{quizData.items[this.itemIndex].title}}</h3>
          <p>{{quizData.items[this.itemIndex].text}}</p>
        </c-col>
      </c-row>
      <c-row v-if="!submited" class="pt4">
        <c-col class="c-w-6">
          <button type="button" class="frameLight pt2 pb2"
            @click="submitQuiz(true)">{{ $t("QUESTION.CTA_FAKE")}}</button>
        </c-col>
        <c-col class="c-w-6">
          <button type="button" class="frameLight pt2 pb2"
            @click="submitQuiz(false)">{{ $t("QUESTION.CTA_REAL")}}</button>
        </c-col>
      </c-row>
      <c-row v-if="submited" class="pt4">
        <c-col class="c-w-12">
          <h1 :class="{'dark-green': correctQuess,'dark-red': !correctQuess}">
            <span v-if="!quizData.items[itemIndex].fake">{{ $t("QUESTION.VIDEO.RESULT_MESSAGE_REAL")}}</span>
            <span v-if="quizData.items[itemIndex].fake">{{ $t("QUESTION.VIDEO.RESULT_MESSAGE_FAKE")}}</span>
          </h1>
        </c-col>
      </c-row>
    </c-col>
  </c-row>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cVideosQuestionItem',
  mixins: [layout, media, form],
  props: {
    quizData: { type: Object, required: true },
    itemIndex: { type: Number, required: true }
  },
  data: function () {
    return {
      submited: false,
      correctQuess: null
    };
  },
  methods: {
    submitQuiz: function (choice) {
      this.submited = true;
      this.correctQuess = this.quizData.items[this.itemIndex].fake === choice;
      setTimeout(()=>{
        this.$router.push({ path: 'explanation' });
      }, 1000);
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>