<template>
  <div class="c-media-viewer">
      <c-vimeo v-if="isVimeo" :videoId="vimeoId"></c-vimeo>
      <c-youtube v-if="!isVimeo && isYoutube" :videoUrl="quizData.items[itemIndex].video_url"></c-youtube>
      <c-figure v-if="!isVimeo && !isYoutube && isImage" :src="quizData.items[itemIndex].image_url"></c-figure>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cMediaViewer',
  mixins: [layout, media, form],
  props: {
    itemIndex: { type: Number, required: true }
  },
  computed: {
    isVimeo (){
      console.log('isVimeo', this.quizData.items[this.itemIndex].video_url);
      return this.quizData.items[this.itemIndex].video_url.includes('vimeo');
    },
    isYoutube (){
      console.log('youtu.be', this.quizData.items[this.itemIndex].video_url);
      if (this.quizData.items[this.itemIndex].video_url.includes('youtube')) return true;
      else if (this.quizData.items[this.itemIndex].video_url.includes('youtu.be')) return true;
      else return false;
    },
    isImage (){
      if (!this.isYoutube && !this.isVimeo && this.quizData.items[this.itemIndex].image_url) return true;
      else return false;
    },
    vimeoId: function (){
      if (this.isVimeo) {
        return this.quizData.items[this.itemIndex].video_url.split('://')[1].split('/')[1];
      }
      return false;
    },
    ...mapState({
      quizData: state => state.quiz,
    }),
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>