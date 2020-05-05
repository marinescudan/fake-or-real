<template>
  <c-page class="vh-100 pt3" :rows="'20vh 66vh 14vh'">
    <c-header class="divider">
      <h1 class="pt5">{{ quiz.stats_title }}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row class="pt3 pb3">
        <c-col class="c-w-12">
          <h2>{{ quiz.stats_subtitle }}</h2>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-6">
          <c-quads-stats-item :quizData="quiz" :itemIndex="0"></c-quads-stats-item>
        </c-col>
        <c-col class="c-w-6">
          <c-quads-stats-item :quizData="quiz" :itemIndex="1"></c-quads-stats-item>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-6">
          <c-quads-stats-item :quizData="quiz" :itemIndex="2"></c-quads-stats-item>
        </c-col>
        <c-col class="c-w-6">
          <c-quads-stats-item :quizData="quiz" :itemIndex="3"></c-quads-stats-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row>
        <c-col class="c-w-3" v-if="this.$store.state.quizList.length >= 2">
          <button type="button" class="frame"
            :disabled="!$store.state.quizList.length"
            @click="startQuiz">{{ quiz.stats_cta_go_again }}</button>
        </c-col>
        <!-- <c-col v-bind:class="{ 'c-w-2': this.$store.state.quizList.length > 1, 'c-w-4': this.$store.state.quizList.length === 1 }">> -->
        <c-col v-bind:class="dinamicClass">
          <c-link class="frame" :location="'/finish'">{{ quiz.stats_cta_go_finish }}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cQuadsStatsItem from '@/components/content/quads/cQuadsStatsItem';

export default {
  name:'cQuadsStats',
  mixins: [page, layout, media, form],
  components: { cQuadsStatsItem },
  data: function () {
    return {
      contentWidth: 90
    };
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quiz: state => state.quiz,
    }),
    dinamicClass: function(){return this.$store.state.quizList.length > 1?'c-w-3':'c-w-4';},
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