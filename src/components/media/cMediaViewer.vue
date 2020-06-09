<template>
  <div class="c-media-viewer">
      <c-vimeo v-if="isVimeo" :videoId="media_url"></c-vimeo>
      <c-youtube v-if="isYoutube" :videoUrl="media_url"></c-youtube>
      <c-figure
        v-if="isImage"
        :itemIndex="itemIndex"
        :src="media_url"
        :alt="media_url"
        :title="item.explanation_title"
        :expandable="true"
        :namespace="namespace"
      ></c-figure>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import cVimeo from '@/components/media/cVimeo.vue';
import cYoutube from "@/components/media/cYoutube.vue";
import cFigure from '@/components/media/cFigure.vue';
export default {
  name:'cMediaViewer',
  components: {cVimeo, cYoutube, cFigure },
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
      if (!this.isVimeo && !this.isYoutube) return true;
      return false;
    },
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>