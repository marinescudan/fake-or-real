<template>
  <c-page class="vh-100 pt3" :rows="'20vh 67vh 13vh'">
    <c-header class="divider">
      <h1 class="pt5">{{ quiz.stats_title }}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row class="pt4">
        <c-col class="c-w-12">
          <h2 class="pb4">{{ quiz.stats_subtitle }}</h2>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-8">
          <c-videos-stats-item :quizData="quiz" :itemIndex="0"></c-videos-stats-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row>
        <c-col class="c-w-3" v-if="this.$store.state.quizList.length >= 2">
          <button type="button" class="frameLight"
            :disabled="!$store.state.quizList.length"
            @click="startQuiz">{{ $t("STATS.CTA_GO_AGAIN")}}</button>
        </c-col>
        <c-col v-bind:class="dinamicClass">
          <c-link :location="'/finish'">{{ $t("STATS.CTA_GO_FINISH")}}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>

import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cVideosStatsItem from '@/components/content/videos/cVideosStatsItem';

export default {
  name:'cVideosStats',
  mixins: [page, layout, media, form],
  components: { cVideosStatsItem },
  props: {
    quiz: { type: Object, required: false },
  },
  data: function () {
    return {
      contentWidth: 90
    };
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
    }),
    dinamicClass: function(){return this.$store.state.quizList.length > 1?'c-w-3':'c-w-6';},
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