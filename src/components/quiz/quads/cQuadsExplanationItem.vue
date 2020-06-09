<template>
  <c-col class="mb4 c-w-6">
    <div class="frame"
      v-bind:class="{'fake':item.fake}">
      <c-row>
        <c-col class="c-w-12">
          <c-media-viewer :itemIndex="itemIndex" :namespace="'explanation'"></c-media-viewer>
          <p v-if="quiz.explanationText">{{ item.explanation_title }}</p>
        </c-col>
      </c-row>
    </div>
  </c-col>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';

export default {
  name:'cQuadsExplanationItem',
  mixins: [page, layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quiz: state => state.quiz,
      item: function () {return this.quiz.items[this.itemIndex]},
    }),
  },
}
</script>
