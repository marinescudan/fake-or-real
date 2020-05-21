<template>
  <div class="frame"
    v-bind:class="[quiz.items[itemIndex].fake?'fake':'real']">
    <c-row>
      <c-col class="c-w-12">
        <c-media-viewer :itemIndex="itemIndex" namespace="explanation"></c-media-viewer>
      </c-col>
    </c-row>
    <c-row class="pt2" v-if="quiz.items[this.itemIndex].explanation_title">
      <c-col class="c-w-12">
        <p>{{quiz.items[this.itemIndex].explanation_title}}</p>
      </c-col>
    </c-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';
import cMediaViewer from '@/components/media/cMediaViewer';

export default {
  name:'cSinglesExplanationItem',
  mixins: [layout, media, form],
  components: { cMediaViewer },
  props: {
    itemIndex: { type: Number, required: true }
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quiz: state => state.quiz,
    }),
    vimeoId (){
      let url = this.quiz.items[this.itemIndex].single_url;
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