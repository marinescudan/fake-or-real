<template>
  <c-page class="setup-page vh-100" :rows="'30vh 70vh'" v-if="locale">
    <c-header class="divider">
      <h1 class="pt3">{{ locale.START.APP_NAME }}</h1>
      <h2 class="pt3">{{ locale.START.APP_VERSION }}</h2>
    </c-header>
    <c-main :width="contentWidth">
      <c-row class="pt5">
        <c-col class="c-w-12">
          <h2>{{ locale.SETUP.CHOOSE_LANGUAGE }}</h2>
          <c-input-locale class="pt3"></c-input-locale>
        </c-col>
      </c-row>
      <c-row class="pt5">
        <c-col class="c-w-6">
          <c-link :location="{name: 'start'}">{{ locale.SETUP.START_QUIZ }}</c-link>
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
    }),
    image_left_url: function(){return this.locale.START.image_left_url},
    image_center_url: function(){return this.locale.START.image_center_url},
    image_right_url: function(){return this.locale.START.image_right_url},
  },
  methods: {
    setupQuiz: function () {
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
