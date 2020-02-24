<template>
  <c-page class="response-page vh-100" :rows="'20vh 68vh 12vh'">
    <c-header class="divider">
      <h1 class="pt5">{{ $t("REESPONSE.TITLE")}}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-news-explanation v-if="$store.state.quiz.contentType === 'news'"></c-news-explanation>
      <c-adds-explanation v-if="$store.state.quiz.contentType === 'addvertisment'"></c-adds-explanation>
      <c-videos-explanation v-if="$store.state.quiz.contentType === 'video'"></c-videos-explanation>
    </c-main>
    <c-footer>
      <c-row>
        <c-col class="c-w-4">
          <c-link :location="'/stats'">{{ $t("REESPONSE.CTA")}}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import {page, layout, media, form} from '@/mixin/components.js';
import cNewsExplanation from '@/components/content/news/cNewsExplanation';
import cVideosExplanation from '@/components/content/videos/cVideosExplanation';
import cAddsExplanation from '@/components/content/adds/cAddsExplanation';

export default {
  name: 'response',
  mixins: [page, layout, media, form],
  components: { cNewsExplanation, cVideosExplanation, cAddsExplanation },
  data: function () {
    return {
      contentWidth: 90,
    }
  }
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass"
</style>