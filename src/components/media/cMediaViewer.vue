<template>
  <div class="c-media-viewer">
      <c-vimeo v-if="isVimeo" :videoId="getVimeoId(media_url)"></c-vimeo>
      <c-youtube v-if="!isVimeo && isYoutube" :videoUrl="media_url"></c-youtube>
      <c-figure
        v-if="!isVimeo && !isYoutube && isImage"
        :src="media_url"
        :alt="media_url"
        :title="item.explanation_title"
      ></c-figure>
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
      if (!this.isVimeo && !this.isYoutube && this.media_url) return true;
      else return false;
    },
  },
  methods: {
    getVimeoId: function (url) {
      return url.split('://')[1].split('/')[1];
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>