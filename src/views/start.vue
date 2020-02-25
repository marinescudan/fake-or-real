<template>
  <c-page class="start-page vh-100" :rows="'23vh 67vh 10vh'">
    <c-header class="divider">
      <h2 class="pt3">{{ $t("START.WELCOME")}}</h2>
      <h1 class="pt3">{{ $t("START.FAKE_OR_REAL")}}</h1>
      <h2 class="pt3">{{ $t("START.NEWS_EDITION")}}</h2>
    </c-header>
    <c-main :width="contentWidth">
      <c-row class="pt4">
        <c-col class="c-w-4">
          <!-- todo: get images from cdn -->
          <c-figure :src="'https://picsum.photos/960/580'"></c-figure>
        </c-col>
        <c-col class="c-w-4">
          <c-figure :src="'https://picsum.photos/960/580'"></c-figure>
        </c-col>
        <c-col class="c-w-4">
          <c-figure :src="'https://picsum.photos/960/580'"></c-figure>
        </c-col>
      </c-row>
      <c-row>
        <c-col class="c-w-4 pt4">
          <p v-html="$t('START.MESSAGE', {'h': 'hello'})"></p>
        </c-col>
      </c-row>
      <c-row class="pt3">
        <c-col class="c-w-4">
          <c-link :location="'/question'">{{ $t("START.CTA")}}</c-link>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <!-- todo: add localized files for other languages -->
      <!-- <c-row>
        <c-col class="c-w-12">
          <c-input-locale></c-input-locale>
        </c-col>
      </c-row> -->
    </c-footer>
  </c-page>
</template>

<script>
import {page, layout, media, form} from '@/mixins/components.js';

export default {
  name: 'start',
  mixins: [page, layout, media, form],
  components: { },
  data: function () {
    return {
      contentWidth: 90
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
</style>
