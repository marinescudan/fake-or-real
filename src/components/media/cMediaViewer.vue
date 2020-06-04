<template>
  <div class="c-media-viewer">
      <c-vimeo v-if="isVimeo" :videoId="media_url"></c-vimeo>
      <c-youtube v-if="isYoutube" :videoUrl="media_url"></c-youtube>
      <c-figure
        v-if="isImage"
        :src="media_url"
        :alt="media_url"
        :title="item.explanation_title"
        :expandable="true"
      ></c-figure>
      <p v-if="!isVimeo && !isYoutube && !isImage" class="tc">Unknown media src</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cMediaViewer',
  mixins: [layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
    namespace: { type: String, required: true }
  },
  data() {
      return {
        resolvedImage: false
      };
  },
  created() {
    //check if media_url is img and itțs valid
    let testImg = new Image();
    testImg.src = this.media_url;
    if(testImg.complete) this.resolvedImage = true;
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
    }),
    item: function () {
      return this.quiz.items[this.itemIndex];
    },
    media_url (){
      return this.item[`${this.namespace}_media_url`] || this.item.question_media_url;
    },
    isVimeo (){
      return this.media_url.includes('vimeo');
    },
    isYoutube (){
      if (this.media_url.includes('youtube')) return true;
      else if (this.media_url.includes('youtu.be')) return true;
      else return false;
    },
    isImage (){
      if (!this.isVimeo && !this.isYoutube && this.resolvedImage) return true;
      return false;
    },
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>