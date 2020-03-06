<template>
    <c-row class="c-videos-explanation-item">
      <c-col class="c-w-5">
        <c-vimeo v-if="vimeoId" :videoId="vimeoId"></c-vimeo>
        <c-figure v-if="!vimeoId" :src="quizData.items[this.itemIndex].image_url"></c-figure>
      </c-col>
      <c-col class="c-w-7">
        <h3>{{quizData.items[this.itemIndex].title}}</h3>
      </c-col>
    </c-row>
</template>

<script>
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cVideosExplanationItem',
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
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>