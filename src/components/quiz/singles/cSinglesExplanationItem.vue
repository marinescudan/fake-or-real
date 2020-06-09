<template>
  <div class="frame"
    v-bind:class="[item.fake?'fake':'real']">
    <c-row>
      <c-col class="c-w-12">
        <c-media-viewer :itemIndex="itemIndex" :namespace="'explanation'"></c-media-viewer>
      </c-col>
    </c-row>
    <c-row class="pt2" v-if="item.explanation_title">
      <c-col class="c-w-12">
        <p>{{item.explanation_title}}</p>
      </c-col>
    </c-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';

export default {
  name:'cSinglesExplanationItem',
  mixins: [page, layout, media, form],
  props: {
    itemIndex: { type: Number, required: true }
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quiz: state => state.quiz,
      item: function (state) {return state.quiz.items[this.itemIndex]},
    }),
    vimeoId (){
      let url = this.item.single_url;
      if (url.includes('vimeo')) {
        return url.split('://')[1].split('/')[1];
      } else {
        return false;
      }
    }
  }
}
</script>
