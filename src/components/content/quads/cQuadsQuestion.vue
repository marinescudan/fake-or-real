<template>
  <c-page v-bind:class="{ 'submited' : submited}">
    <c-header>
      <h1>{{ quiz.question_title }}</h1>
      <h2>{{ quiz.question_subtitle }}</h2>
    </c-header>
    <c-main>
      <c-row>
        <c-quads-question-item
          :itemIndex="0" v-on:itemSelected="saveSelection"
        ></c-quads-question-item>
        <c-quads-question-item
          :itemIndex="1" v-on:itemSelected="saveSelection"
        ></c-quads-question-item>
        <c-quads-question-item
          :itemIndex="2" v-on:itemSelected="saveSelection"
        ></c-quads-question-item>
        <c-quads-question-item
          :itemIndex="3" v-on:itemSelected="saveSelection"
        ></c-quads-question-item>
      </c-row>
    </c-main>
    <c-footer>
      <c-row v-if="!submited">
        <c-col class="c-w-12">
          <p class="tc">{{ quiz.question_cta_help }}</p>
        </c-col>
      </c-row>
      <c-row v-if="!submited">
        <c-col class="c-w-4">
          <button type="button" class="frame"
            v-bind:class="{ 'disabled' : disabled }"
            :disabled="disabled"
            @click="submitQuiz">{{ quiz.question_cta_go_explanation }}</button>
        </c-col>
      </c-row>
    </c-footer>
    <c-modal :show="showModal">
      <h1 :class="{'correct': selectedFakeNumber === fakesNumber,'wrong': selectedFakeNumber !== fakesNumber}">
        <span>{{ quiz.question_submit_message_heading}}</span>
      </h1>
    </c-modal>
  </c-page>
</template>

<script>
import { mapState } from 'vuex';
import {page, layout, media, form} from '@/mixins/components';
import cQuadsQuestionItem from '@/components/content/quads/cQuadsQuestionItem';
import cModal from '@/components/container/cModal';

export default {
  name:'cQuadsQuestion',
  mixins: [page, layout, media, form ],
  components: { cQuadsQuestionItem, cModal },
  data: function () {
    return {
      submited: false,
      selectedFakeNumber: 0,
      showModal: false,
    };
  },
  computed: {
    ...mapState({
      locale: state => state.locale,
      quiz: state => state.quiz,
      disabled: function () { return this.selectedFakeNumber < 1;},
      fakesNumber: function () {
        let counter = 0;
        this.quiz.items.forEach(each => {
          if (each.fake) counter++
        });
        return counter;
      },
    }),
  },
  methods: {
    saveSelection: function (itemIndex, selected) {
      this.selectedFakeNumber = selected ? this.selectedFakeNumber + 1 : this.selectedFakeNumber - 1;
      let newQuiz = Object.assign({}, this.quiz);
      newQuiz.items[itemIndex].selected = selected;
      this.$store.dispatch('setState', {
        key: 'quiz',
        value: newQuiz
      })
    },
    submitQuiz: function () {
      this.submited = true;
      this.showModal = true;
      this.$store.dispatch('setState', { key: 'quiz', value: this.quiz}).then(()=>{
        setTimeout(()=>{ this.showModal = false; }, 2600);
        setTimeout(()=>{ this.$router.push({ path: `/explanation/${this.quiz.uuid}` }); }, 3000);
      });
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>