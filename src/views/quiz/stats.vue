<template>
  <c-page class="stats-page vh-100" :rows="'20vh 68vh 12vh'">
    <c-header class="divider">
      <h1 class="pt5">{{ $t("STATS.TITLE")}}</h1>
    </c-header>
    <c-main :width="contentWidth">
      <c-news-stats v-if="$store.state.quiz.contentType === 'news'"></c-news-stats>
      <c-adds-stats v-if="$store.state.quiz.contentType === 'advertisment'"></c-adds-stats>
      <c-videos-stats v-if="$store.state.quiz.contentType === 'video'"></c-videos-stats>
    </c-main>
    <c-footer>
      <c-row>
        <c-col class="c-w-2">
          <!-- todo: pop quiz from quizz list -->
          <c-link :location="'/question'">{{ $t("STATS.CTA_REPEAT")}}</c-link>
        </c-col>
        <c-col class="c-w-2">
          <!-- todo: reset quiz list from http or memory -->
          <c-link :location="'/finish'">{{ $t("STATS.CTA_FINISH")}}</c-link>
        </c-col>
      </c-row>
    </c-footer>
  </c-page>
</template>

<script>
import {page, layout, media, form} from '@/mixins/components.js';
import cNewsStats from '@/components/content/news/cNewsStats';
import cAddsStats from '@/components/content/adds/cAddsStats';
import cVideosStats from '@/components/content/videos/cVideosStats';
export default {
  name: 'stats',
  mixins: [page, layout, media, form],
  components: { cNewsStats, cAddsStats, cVideosStats },
  data: function () {
    return {
      contentWidth: 90
    }
  }
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass"
</style>
