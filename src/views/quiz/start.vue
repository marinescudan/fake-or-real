<template>
  <c-page class="start-page vh-100" :rows="'23vh 67vh 10vh'" v-if="locale">
    <c-header class="divider">
      <h2 class="pt3">{{ locale.START.WELCOME_TITLE }}</h2>
      <h1 class="pt3">{{ locale.START.APP_NAME }}</h1>
      <h2 class="pt3">{{ locale.START.APP_VERSION }}</h2>
    </c-header>
    <c-main :width="contentWidth">
      <c-row class="pt4">
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
      <c-row>
        <c-col class="c-w-4 pt4">
          <div class="welcome-message"  v-html="locale.START.WELCOME_MESSAGE"></div>
        </c-col>
      </c-row>
      <c-row class="pt3">
        <c-col class="c-w-4">
          <button type="button" class="frameLight"
            :disabled="!$store.state.quizList"
            @click="startQuiz">{{ locale.START.CTA_GO_QUESTION }}</button>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components.js';
export default {
  name: 'start',
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
    image_left_url: function(){return this.locale.START.image_left_url},
    image_center_url: function(){return this.locale.START.image_center_url},
    image_right_url: function(){return this.locale.START.image_right_url},
  },
  methods: {
    startQuiz: function () {
      this.$store.dispatch('setQuiz', {loseCurrent: false}).then(()=>{
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
