<template>
    <div class="frame"
      v-bind:class="[ item.fake ? 'fake' : 'real' ]">
      <c-row >
        <c-col class="c-w-12">
          <c-figure
            :src="item.explanation_media_url || item.question_media_url"
            :alt="item.explanation_media_url || item.question_media_url"
            :title="item.explanation_title"
          ></c-figure>
        </c-col>
        <c-col class="c-w-12" v-if="item.explanation_title">
          <p>{{ item.explanation_title}}</p>
        </c-col>
      </c-row>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import {layout, media, form} from '@/mixins/components';

export default {
  name:'cDoublesExplanationItem',
  mixins: [layout, media, form],
  props: {
    itemIndex: { type: Number, required: true },
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
    }),
    item: function () {return this.quiz.items[this.itemIndex]},
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>