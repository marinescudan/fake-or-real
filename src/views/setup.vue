<template>
  <c-page class="setup-page" v-if="locale">
    <c-header>
      <h1>{{ locale.start_app_name }}</h1>
      <h2>{{ locale.start_app_version }}</h2>
    </c-header>
    <c-main>
      <c-row>
        <c-col class="c-w-6">
          <h2>{{ locale.setup_choose_language }}</h2>
          <c-input-locale class="pt3"></c-input-locale>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row>
        <c-col class="c-w-4">
          <c-link class="frame" :location="{name: 'start'}">{{ locale.setup_start_quiz }}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
export default {
  name: 'setup',
  mixins: [page, layout, media, form],
  data: function () {
    return {
      contentWidth: 96
    }
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
      locale: state => state.locale,
    }),
    image_left_url: function(){return this.locale.start_image_left_url},
    image_center_url: function(){return this.locale.start_image_center_url},
    image_right_url: function(){return this.locale.start_image_right_url},
  },
  methods: {
    setupQuiz: function () {
      this.$store.dispatch('setQuiz', {loseCurrent: false}).then(()=>{
        this.$router.push({ path: 'question' });
      });
    },
  }
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.setup-page
  .c-header
    height: 30%
  .c-main
    height: 50%
    width: 96%
  .c-footer
    height: 20%

</style>
