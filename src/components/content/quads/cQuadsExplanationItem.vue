<template>
  <c-col class="mb4 c-w-6">
    <div class="frame"
      v-bind:class="[ item.fake ? 'fake' : 'real' ]">
      <c-row>
        <c-col class="c-w-12">
          <c-figure
            :src="item.explanation_media_url || item.question_media_url"
            :alt="item.explanation_media_url || item.question_media_url"
            :title="item.explanation_title"
            :width="'60%'"
            :height="'60%'"
            :expandable="true"
          ></c-figure>
          <p v-if="showTextSection">{{ item.explanation_title }}</p>
        </c-col>
      </c-row>
    </div>
  </c-col>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cQuadsExplanationItem',
  mixins: [layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quiz: state => state.quiz,
    }),
    showTextSection: function () { return  this.item.explanation_title ? true : false; },
    item: function () {return this.quiz.items[this.itemIndex]},
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>