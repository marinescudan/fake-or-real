<template>
  <c-row>
    <c-col class="c-w-4"  v-if="showStatsBtn">
      <button type="button" class="frame"
        @click="next('/stats')">{{ quiz.explanation_cta_go_stats }}</button>
    </c-col>

    <c-col class="c-w-3"  v-if="!showStatsBtn && this.$store.state.quizList.length >= 2">
      <button type="button" class="frame"
        :disabled="!$store.state.quizList.length"
        @click="startQuiz">{{ quiz.stats_cta_go_again }}</button>
    </c-col>

    <c-col v-bind:class="quizListLength > 1?'c-w-3':'c-w-4'" v-if="!showStatsBtn">
      <button type="button" class="frame"
        @click="next('/finish')">{{ quiz.stats_cta_go_finish }}</button>
    </c-col>
  </c-row>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';

export default {
  name:'NextStep',
  mixins: [page, layout, media, form],
  components: {  },
  props: {
    page: { type: String, required: true }
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
      quizListLength: state => state.quizList.length,
      showStatsPageFlag: state => state.showStatsPageFlag,
    }),
    showStatsBtn: function(){return this.page != 'stats' && this.showStatsPageFlag},
  },
  methods: {
    startQuiz: function () {
      this.$store.dispatch('setQuiz', { loseCurrent: true }).then(()=>{
        this.$router.push({ path: `/question/${this.$store.state.quiz.uuid}` });
      });
    },
    next: function (location) {
      if (location === '/finish') setTimeout(()=>{ this.$router.push({ path: `${location}` }); }, 100);
      if (location === '/stats') setTimeout(()=>{ this.$router.push({ path: `${location}/${this.quiz.uuid}` }); }, 100);
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>