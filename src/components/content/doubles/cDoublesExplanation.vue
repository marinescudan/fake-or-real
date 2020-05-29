<template>
  <c-page>
    <c-header>
      <h1>{{ quiz.explanation_title}}</h1>
      <h2>{{ quiz.explanation_subtitle }}</h2>
    </c-header>
    <c-main>
      <c-row>
        <c-col class="c-w-6">
          <div class="user-input" v-html="quiz.contents"></div>
        </c-col>
        <c-col class="c-w-6">
          <c-row>
            <c-col class="c-w-6">
              <c-doubles-explanation-item
                :itemIndex="0" :quiz="quiz"
              ></c-doubles-explanation-item>
            </c-col>
            <c-col class="c-w-6">
              <c-doubles-explanation-item
                :itemIndex="1" :quiz="quiz"
              ></c-doubles-explanation-item>
            </c-col>
          </c-row>
        </c-col>
      </c-row>
    </c-main>
    <c-footer>
      <c-next-step :page="'explanation'"></c-next-step>
    </c-footer>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cDoublesExplanationItem from '@/components/content/doubles/cDoublesExplanationItem';
import cNextStep from '@/components/input/cNextStep';
export default {
  name:'cDoublesExplanation',
  mixins: [page, layout, media, form],
  components: { cDoublesExplanationItem, cNextStep },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quiz: state => state.quiz,
    }),
  },
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>