<template>
  <c-page class="start-page">
    <c-header class="divider">
      <h2>{{ locale.start_welcome_title }}</h2>
      <h1>{{ locale.start_app_name }}</h1>
      <h2>{{ locale.start_app_version }}</h2>
    </c-header>
    <c-main>
      <c-row>
        <c-col class="c-w-6">
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
          <c-row>
            <c-col class="c-w-12">
              <div class="welcome-message" v-html="locale.start_contents"></div>
            </c-col>
          </c-row>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row class="pt3">
        <c-col class="c-w-4">
          <button type="button" class="frame mr3 ml3"
            :disabled="!$store.state.quizList"
            @click="startQuiz">{{ locale.start_cta_go_question_ }}</button>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
export default {
  name: 'start',
  mixins: [page, layout, media, form],
  computed: {
    ...mapState({
      quiz: state => state.quiz,
      locale: state => state.locale
    }),
    image_left_url: function(){return this.locale.start_image_left_url},
    image_center_url: function(){return this.locale.start_image_center_url},
    image_right_url: function(){return this.locale.start_image_right_url}
  },
  methods: {
    startQuiz: function () {
      if (this.quiz) {
        this.$router.push({ path: `/question/${this.quiz.uuid}`});
      }
    }
  }
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.start-page
  .c-header
    height: 23%
  .c-main
    height: 67%
    width: 96%
  .c-footer
    height: 10%

</style>