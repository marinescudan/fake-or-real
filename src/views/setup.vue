<template>
  <c-page class="setup-page vh-100" :rows="'30vh 70vh'" v-if="locale">
    <c-header class="divider">
      <h1 class="pt3">{{ locale.start.app_name }}</h1>
      <h2 class="pt3">{{ locale.start.app_version }}</h2>
    </c-header>
    <c-main :width="contentWidth">
      <c-row class="pt5">
        <c-col class="c-w-12">
          <h2>{{ locale.setup.choose_language }}</h2>
          <c-input-locale class="pt3"></c-input-locale>
        </c-col>
      </c-row>
      <c-row class="pt5">
        <c-col class="c-w-4">
          <label>
            <input type="checkbox" @change="setFlag('loadRandomQuestionFlag')" :value="loadRandomQuestionFlag" > {{ locale.setup.random_checkbox_lable }}
          </label>
          <label>
            <input type="checkbox" @change="setFlag('showStatsPageFlag')" :value="showStatsPageFlag" > {{ locale.setup.show_stats_lable }}
          </label>
        </c-col>
      </c-row>
      <c-row class="pt5">
        <c-col class="c-w-4">
          <c-link class="frame" :location="{name: 'start'}">{{ locale.setup.start_quiz }}</c-link>
        </c-col>
      </c-row>
    </c-main>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components.js';
export default {
  name: 'setup',
  mixins: [page, layout, media, form],
  data: function () {
    return {
      contentWidth: 90
    }
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
      locale: state => state.locale,
      loadRandomQuestionFlag: state => state.loadRandomQuestionFlag,
      showStatsPageFlag: state => state.showStatsPageFlag,
    }),
    image_left_url: function(){return this.locale.start.image_left_url},
    image_center_url: function(){return this.locale.start.image_center_url},
    image_right_url: function(){return this.locale.start.image_right_url},
  },
  methods: {
    setupQuiz: function () {
      this.$store.dispatch('setQuiz', {loseCurrent: false}).then(()=>{
        this.$router.push({ path: 'question' });
      });
    },
    setFlag: function (flag) {
      this.$store.dispatch('setState', { key: flag, value: !this[flag]});
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>
