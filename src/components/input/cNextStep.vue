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
import cRow from '@/components/container/cRow.vue';
import cCol from '@/components/container/cCol.vue';
export default {
  name:'cNextStep',
  components: { cCol, cRow },
  props: {
    page: { type: String, required: true }
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
      quizListLength: state => state.quizList.length
    }),
    showStatsBtn: function(){return this.page != 'stats' && JSON.parse(window.localStorage.getItem('showStats'))}
  },
  methods: {
    startQuiz: function () {
      this.$store.dispatch('setState', { key: 'isLoading', value: true });
      this.$store.dispatch('setQuiz', { loseCurrent: true }).then(()=>{
        this.$store.dispatch('setState', { key: 'isLoading', value: false });
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