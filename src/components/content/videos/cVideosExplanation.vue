<template>
  <c-page class="vh-100 pt3" :rows="'20vh 67vh 13vh'">
    <c-header class="divider">
      <h1 class="pt5">{{ $t("EXPLANATION.VIDEO.TITLE")}}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row class="pt4">
        <c-col class="c-w-8">
          <c-row>
            <c-col class="c-w-6">
              <h3 class="pb2">{{ $t("EXPLANATION.VIDEO.SUBTITLE")}}</h3>
            </c-col>
            <c-col class="c-w-6">
            </c-col>
          </c-row>
          <c-row>
            <c-col class="c-w-12">
              <p class="two-columns" v-html="quiz.description"></p>
            </c-col>
          </c-row>
        </c-col>
        <c-col class="c-w-4">
          <c-videos-explanation-item :quizData="quiz" :itemIndex="0"></c-videos-explanation-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row class="pt4">
        <c-col class="c-w-4">
          <c-link :location="'stats'">{{ $t("EXPLANATION.CTA_GO_STATS")}}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import {layout, media, form} from '@/mixins/components';
import cVideosExplanationItem from '@/components/content/videos/cVideosExplanationItem';

export default {
  name:'cVideosExplanation',
  mixins: [layout, media, form],
  components: { cVideosExplanationItem },
  props: {
    quiz: { type: Object, required: false },
  },
  data: function () {
    return {
      contentWidth: 90
    };
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>