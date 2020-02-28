<template>
  <c-page class="vh-100 pt3" :rows="'20vh 67vh 13vh'">
    <c-header class="divider">
      <!-- TODO: add adds question title variable -->
      <h1 class="pt5">{{ $t("EXPLANATION.TITLE")}}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row>
        <c-col class="c-w-8">
          <c-row>
            <c-col class="c-w-6">
              <!-- TODO: add news explanation subtitle variable -->
              <h3 class="pb2">{{ $t("EXPLANATION.SUBTITLE")}}</h3>
            </c-col>
            <c-col class="c-w-6">
            </c-col>
          </c-row>
          <c-row>
            <c-col class="c-w-12">
              <p class="two-columns">{{quiz.description}}</p>
            </c-col>
          </c-row>
        </c-col>
        <c-col class="c-w-4">
          <c-adds-explanation-item :quizItem="quiz.items[0]"></c-adds-explanation-item>
          <c-adds-explanation-item :quizItem="quiz.items[1]"></c-adds-explanation-item>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row class="pt4">
        <c-col class="c-w-4">
          <c-link :location="'/stats'">{{ $t("EXPLANATION.CTA_GO_STATS")}}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import {page, layout, media, form} from '@/mixins/components';
import cAddsExplanationItem from '@/components/content/adds/cAddsExplanationItem';

export default {
  name:'cAddsExplanation',
  mixins: [page, layout, media, form],
  components: { cAddsExplanationItem },
  props: {
    quiz: { type: Object, required: true },
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