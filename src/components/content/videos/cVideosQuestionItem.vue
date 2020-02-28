<template>
  <c-row class="c-videos-question-item">
    <c-col class="c-w-8">
      <!-- todo: add video id in the content data json -->
      <!-- <c-vimeo :video-id="quizItem.video_id"></c-vimeo> -->
      <c-vimeo
        :videoId="'391952856'"
        :playerWidth="600"
        :playerHeight="300"
      ></c-vimeo>
    </c-col>
    <c-col class="c-w-4">
      <c-row>
        <c-col>
          <h3>{{quizItem.title}}</h3>
          <p>{{quizItem.text}}</p>
        </c-col>
      </c-row>
      <c-row v-if="!submited" class="pt4">
        <c-col class="c-w-6">
          <button type="button" class="frameLight pt2 pb2"
            @click="submitQuiz(false)">{{ $t("Fake?")}}</button>
        </c-col>
        <c-col class="c-w-6">
          <button type="button" class="frameLight pt2 pb2"
            @click="submitQuiz(true)">{{ $t("Real?")}}</button>
        </c-col>
      </c-row>
      <c-row v-if="submited" class="pt4">
        <c-col class="c-w-12">
          <h1>{{ $t("QUESTION.RESULT_MESSAGE", {realFakeNumber: realFakeNumber})}}</h1>
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
    quizItem: { type: Object, required: true },
  },
  data: function () {
    return {
      submited: false
    };
  },
  methods: {
    submitQuiz: function (choice) {
      this.submited = true;
      // todo: add class success or danger if user gueses to the response title
      console.log(choice);
      setTimeout(()=>{
        this.$router.push({ path: 'explanation' });
      }, 2000);
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>