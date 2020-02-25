<template>
  <c-page class="finish-page vh-100"  :rows="'27vh 63vh 10vh'">
    <c-header>
      <h1>{{ $t("FINISH.TITLE")}}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-row>
        <c-col class="c-w-4">
          <c-figure :src="'https://picsum.photos/800/400'"></c-figure>
        </c-col>
        <c-col class="c-w-4">
          <c-figure :src="'https://picsum.photos/800/400'"></c-figure>
        </c-col>
        <c-col class="c-w-4">
          <c-figure :src="'https://picsum.photos/800/400'"></c-figure>
        </c-col>
      </c-row>
      <c-row class="pt4">
        <c-col class="c-w-4">
          <h2>{{ $t("FINISH.MESSAGE")}}</h2>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-row>
        <c-col class="c-w-3">
          <c-link :location="'/'">{{ $t("FINISH.BUTTON")}}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import {page, layout, media, form} from '@/mixins/components.js';
export default {
  name: 'finish',
  mixins: [page, layout, media, form],
  data: function () {
    return {
      contentWidth: 90
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass"
</style>