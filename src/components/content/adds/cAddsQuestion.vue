<template>
  <div class="c-adds-question pt3">
    <c-row>
      <c-col class="c-w-12">
        <h2 class="pb4">{{ $t("QUESTION.SUB_TITLE")}}</h2>
      </c-col>
    </c-row>
    <c-row>
      <c-col class="c-w-6">
        <c-adds-question-item :addsItem="addsItem"></c-adds-question-item>
      </c-col>
      <c-col class="c-w-6">
        <c-adds-question-item :addsItem="addsItem"></c-adds-question-item>
      </c-col>
    </c-row>
  </div>
</template>

<script>
import {layout, media, form} from '@/mixin/components';
import cAddsQuestionItem from '@/components/content/adds/cAddsQuestionItem';

export default {
  name:'cAddsQuestion',
  mixins: [layout, media, form],
  components: { cAddsQuestionItem },
  props: {
    addsData: { type: Object, required: false },
  },
  data: function () {
    return {
      addsItem: {
        num: 1
      }
    }
  },
  computed: { }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";

.c-adds-question
  display: block

</style>