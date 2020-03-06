<template>
  <c-page class="setup-page vh-100" :rows="'100vh'" v-if="locale">
    <c-main :width="contentWidth">
      <c-row class="pt7">
        <c-col class="c-w-12">
          <h1 class="pt3">{{ locale.START.APP_NAME }}</h1>
          <h2 class="pt3">{{ locale.START.APP_VERSION }}</h2>
        </c-col>
      </c-row>
      <c-row class="pt4">
        <c-col class="c-w-12">
          <c-input-locale></c-input-locale>
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
