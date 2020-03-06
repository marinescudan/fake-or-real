<template>
  <c-row>
    <c-col class="c-w-8">
      <c-vimeo v-if="vimeoId" :videoId="vimeoId"></c-vimeo>
      <c-figure v-if="!vimeoId" :src="quizData.items[itemIndex].image_url"></c-figure>
    </c-col>
    <c-col class="c-w-4">
      <h3>{{quizData.items[itemIndex].title}}</h3>
      <p class="f2 user-input" v-html="quizData.items[itemIndex].click_count"></p>
    </c-col>
  </c-row>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cVideosStatsItem',
  mixins: [layout, media, form],
  props: {
    quizData: { type: Object, required: true },
    itemIndex: { type: Number, required: true }
  },
  computed: {
    vimeoId (){
      let url = this.quizData.items[this.itemIndex].video_url;
      if (url.includes('vimeo')) {
        return url.split('://')[1].split('/')[1];
      } else {
        return false;
      }
    },
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>