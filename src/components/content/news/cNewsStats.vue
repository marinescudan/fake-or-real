<template>
  <c-page class="vh-100 pt3" :rows="'20vh 67vh 13vh'">
    <c-header class="divider">
      <h1 class="pt5">{{ $t("STATS.NEWS.TITLE")}}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row class="pt4">
        <c-col class="c-w-12">
          <h2 class="pb4">{{ $t("STATS.NEWS.SUBTITLE")}}</h2>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-6">
          <c-news-stats-item :quizData="quiz" :itemIndex="0"></c-news-stats-item>
        </c-col>
        <c-col class="c-w-6">
          <c-news-stats-item :quizData="quiz" :itemIndex="1"></c-news-stats-item>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-6">
          <c-news-stats-item :quizData="quiz" :itemIndex="2"></c-news-stats-item>
        </c-col>
        <c-col class="c-w-6">
          <c-news-stats-item :quizData="quiz" :itemIndex="3"></c-news-stats-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row>
        <c-col class="c-w-2" v-if="this.$store.state.quizList.length >= 2">
          <button type="button" class="frameLight"
            :disabled="!$store.state.quizList.length"
            @click="startQuiz">{{ $t("STATS.CTA_GO_AGAIN")}}</button>
        </c-col>
        <!-- <c-col v-bind:class="{ 'c-w-2': this.$store.state.quizList.length > 1, 'c-w-4': this.$store.state.quizList.length === 1 }">> -->
        <c-col v-bind:class="dinamicClass">
          <c-link :location="'/finish'">{{ $t("STATS.CTA_GO_FINISH")}}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import {page, layout, media, form} from '@/mixins/components';
import cNewsStatsItem from '@/components/content/news/cNewsStatsItem';

export default {
  name:'cNewsStats',
  mixins: [page, layout, media, form],
  components: { cNewsStatsItem },
  props: {
    quiz: { type: Object, required: false },
  },
  data: function () {
    return {
      contentWidth: 90
    };
  },
  computed: {
    dinamicClass: function(){return this.$store.state.quizList.length > 1?'c-w-2':'c-w-4';},
  },
  methods: {
    startQuiz: function () {
      this.$store.dispatch('setQuiz', {loseCurrent: true}).then(()=>{
        this.$router.push({ path: 'question' });
      });
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>