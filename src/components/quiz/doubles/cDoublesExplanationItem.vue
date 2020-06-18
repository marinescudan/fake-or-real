<template>
    <div class="frame"
      v-bind:class="{'fake':item.fake}">
      <c-row>
        <c-col class="c-w-12">
          <c-media-viewer :itemIndex="itemIndex" :namespace="'explanation'"></c-media-viewer>
        </c-col>
        <c-col class="c-w-12" v-if="item.explanation_title">
          <p>{{ item.explanation_title }}</p>
        </c-col>
      </c-row>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';

export default {
  name:'cDoublesExplanationItem',
  mixins: [page, layout, media, form],
  props: {
    itemIndex: { type: Number, required: true }
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz
    }),
    item: function () {return this.quiz.items[this.itemIndex]}
  }
}
</script>
