<template>
  <c-page class="finish-page" v-if="locale">
    <c-header class="divider">
      <h1>{{ locale.finish_goodbye_title }}</h1>
    </c-header>
    <c-main>
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
          <div class="finish-message user-input" v-html="locale.finish_contents"></div>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row>
        <c-col class="c-w-4">
          <c-link class="frame mr3 ml3" :location="{name: 'start'}">{{ locale.finish_cta_go_start }}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
export default {
  name: 'finish',
  mixins: [page, layout, media, form],
  data: function () {
    return {
      contentWidth: 96
    }
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
      locale: state => state.locale
    }),
    image_left_url: function(){ return this.locale.finish_image_left_url },
    image_center_url: function(){ return this.locale.finish_image_center_url },
    image_right_url: function(){ return this.locale.finish_image_right_url }
  },
  created () {
    let tempArray = JSON.parse(JSON.stringify(this.$store.state.quizListBackup));
    this.$store.dispatch('setState', { key: 'quizList', value: tempArray}).then(()=>{
      this.$store.dispatch('setQuiz', { loseCurrent: false });
    });
  }
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.finish-page
  .c-header
    height: 20%
  .c-main
    height: 70%
    width: 94%
  .c-footer
    height: 10%

</style>