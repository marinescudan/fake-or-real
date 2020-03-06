<template>
  <c-page class="finish-page vh-100"  :rows="'27vh 63vh 10vh'" v-if="locale">
    <c-header>
      <h1>{{ locale.FINISH.GOODBYE_TITLE }}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row>
        <c-col class="c-w-4">
          <c-figure :src="image_left_url"></c-figure>
        </c-col>
        <c-col class="c-w-4">
          <c-figure :src="image_center_url"></c-figure>
        </c-col>
        <c-col class="c-w-4">
          <c-figure :src="image_right_url"></c-figure>
        </c-col>
      </c-row>
      <c-row class="pt4">
        <c-col class="c-w-4">
          <h2>{{ locale.FINISH.GOODBYE_MESSAGE }}</h2>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row>
        <c-col class="c-w-3">
          <c-link :location="{name: 'start'}">{{ locale.FINISH.CTA_GO_FINISH }}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components.js';
export default {
  name: 'finish',
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
    }),
    image_left_url: function(){ return this.locale.FINISH.image_left_url },
    image_center_url: function(){ return this.locale.FINISH.image_center_url },
    image_right_url: function(){ return this.locale.FINISH.image_right_url },
  },
  created () {
    this.$store.dispatch('setState', { key: 'quizList', value: this.$store.state.quizListBackup}).then(()=>{
      this.$store.dispatch('setQuiz', { loseCurrent: false });
    });
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>