<template>
  <c-page class="start-page vh-100" :rows="'23vh 67vh 10vh'">
    <c-header class="divider">
      <h2 class="pt3">{{ $t('START.WELCOME_TITLE') }}</h2>
      <h1 class="pt3">{{ $t('START.APP_NAME') }}</h1>
      <h2 class="pt3">{{ $t('START.APP_VERSION') }}</h2>
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
          <p v-html="$t('START.WELCOME_MESSAGE')"></p>
        </c-col>
      </c-row>
      <c-row class="pt3">
        <c-col class="c-w-4">
          <button type="button" class="frameLight"
            :disabled="!$store.state.quiz"
            @click="startQuiz">{{ $t('START.CTA_GO_QUESTION') }}</button>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <!-- TODO: add localized files for other languages -->
      <c-row>
        <c-col class="c-w-12">
          <c-input-locale></c-input-locale>
        </c-col>
      </c-row>
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
      i18n_keys: state => state.i18n_keys,
    }),
    image_left_url: function(){return this.$t('START.image_left_url')},
    image_center_url: function(){return this.$t('START.image_center_url')},
    image_right_url: function(){return this.$t('START.image_right_url')},
  },
  created () {
    this.$store.dispatch('setState', { key: 'quizList', value: this.$store.state.quizListBackup}).then(()=>{
      this.$store.dispatch('setQuiz', { loseCurrent: false });
    });
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
