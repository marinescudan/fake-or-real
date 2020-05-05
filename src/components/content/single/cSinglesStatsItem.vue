<template>
  <c-row>
    <c-col class="c-w-8">
      <c-media-viewer :itemIndex="itemIndex"></c-media-viewer>
    </c-col>
    <c-col class="c-w-4">
      <h3>{{quizData.items[itemIndex].title}}</h3>
      <p class="f2">{{quizData.items[itemIndex].click_count}}</p>
    </c-col>
  </c-row>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';
import cMediaViewer from '@/components/media/cMediaViewer';

export default {
  name:'cSinglesStatsItem',
  mixins: [layout, media, form],
  components: { cMediaViewer },
  props: {
    itemIndex: { type: Number, required: true }
  },
  computed: {
    ...mapState({
      quizData: state => state.quiz,
    }),
    vimeoId (){
      let url = this.quizData.items[this.itemIndex].single_url;
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