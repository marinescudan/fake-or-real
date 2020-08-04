<template>
  <div class="c-media-viewer">
      <c-vimeo v-if="isVimeo" :videoId="media_url" :options="vimeoOptions"></c-vimeo>
      <c-youtube v-if="isYoutube" :videoUrl="media_url"></c-youtube>
      <c-figure
        v-if="isImage"
        :itemIndex="itemIndex"
        :src="media_url"
        :alt="media_url"
        :title="item.explanation_title"
        :expandable="true"
        :figureStyle="figureStyle"
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
      quiz: state => state.quiz
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
    figureStyle: function () {
      let exponent;

      if (this.quiz.items.length === 1) exponent = 10;

      if (this.quiz.items.length === 2) {
        exponent = 10;
        if (this.namespace === 'question' && !this.quiz[`${this.namespace}Text`]) exponent  = 10;
      }

      if (this.quiz.items.length === 4) {
        if (this.namespace === 'question') exponent  = this.quiz[`${this.namespace}Text`] ? 30 : 20;
        if (this.namespace === 'explanation') exponent  = 40;
        if (this.namespace === 'stats') exponent  = 30;
      }
      return `max-height: ${ this.availableHeight / exponent }rem;`;
    },
    availableWidth: function (){ return ( this.$screen.width * 0.5625 ) >= this.$screen.height ? this.$screen.height / 0.5625 : this.$screen.width;},
    availableHeight: function (){ return this.availableWidth * 0.5625;},
    vimeoOptions (){
      let options = { /*byline: false, title: false,*/ dnt: true };

      let exponent = 0;
      if (this.quiz.items.length === 1 && this.namespace === 'question') exponent = 2.111;
      if (this.quiz.items.length === 1 && this.namespace === 'explanation') exponent = 3.45;
      if (this.quiz.items.length === 1 && this.namespace === 'stats') exponent = 3.333;

      options.height = this.availableHeight / exponent;
      options.width = this.availableWidth / exponent;

      return options;
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>