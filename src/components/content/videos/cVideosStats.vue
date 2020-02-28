<template>
  <c-page class="vh-100 pt3" :rows="'20vh 67vh 13vh'">
    <c-header class="divider">
      <!-- todo: add news STATS title variable -->
      <h1 class="pt5">{{ $t("STATS.TITLE")}}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row>
        <c-col class="c-w-12">
          <!-- todo: add video explanation subtitle variable -->
          <h2 class="pb4">{{ $t("STATS.SUBTITLE")}}</h2>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-8">
          <c-videos-stats-item :quizItem="quiz.items[0]"></c-videos-stats-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row>
        <c-col class="c-w-2">
          <button type="button" class="frameLight"
            :disabled="!$store.state.quizList.length"
            @click="startQuiz">{{ $t("STATS.CTA_GO_AGAIN")}}</button>
        </c-col>
        <c-col class="c-w-2">
          <c-link :location="'/finish'">{{ $t("STATS.CTA_GO_FINISH")}}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
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