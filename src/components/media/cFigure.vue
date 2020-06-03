<template>
    <figure class="c-figure" @keydown.esc="expand(false)">
      <div class="media-container">
        <img class="media" :src="url_builder(src)" :alt="alt" :title="title" :width="width" :height="height"/>
        <button @click.stop="expand(true)" class="expand-btn" type="button" v-if="expandable">&nbsp;</button>
      </div>

      <div class="media-modal" v-if="expanded" @click.stop="">
        <img class="media" :src="url_builder(src)" @click.stop=""/>
        <button @click.stop="expand(false)" class="close-btn" type="button">&nbsp;</button>
        <div class="backdrop" @click.stop="expand(false)"></div>
      </div>
    </figure>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name:'cFigure',
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: false },
    title: { type: String,required: false },
    width: { type: String, required: false, },
    height: { type: String, required: false, },
    expandable: { type: Boolean, required: false, default: function (){return false;}},
  },
  data() {
      return { expanded: false }
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
      item: state => state.quiz[this.itemIndex],
    }),
    style: function(){
      return `max-height: ${ this.item.hasText ? '50rem' : 'auto'}`;
    }
  },
  methods: {
    url_builder: function (url) {
      return url;
    },
    expand: function (bool) {
      this.expanded = bool;
    },
  },
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.c-figure
  position: relative

.media-container
  .media
    position: relative
  .expand-btn
    position: absolute
    z-index: 0
    bottom: 0
    right: calc(50% - 2.5rem)
    width: 5rem
    height: 5rem
    background: rgba(255,255,255,0.5) url('~@/assets/img/icon-expand.svg') center center no-repeat
    background-size: 2.5rem 2.5rem

.selected
  .media-container::before
    content: ""
    z-index: 1
    position: absolute
    @include fillContainer
    @include selectedBackground
  .expand-btn
    display: none

.media-modal
  z-index: 1
  position: fixed
  width: 100rem
  max-width: 96vw
  height: 100rem
  max-height: 96vh
  top: calc(50% - 50rem)
  left: calc(50% - 50rem)
  background: $dark
  .media
    width: 100%
  .close-btn
    position: absolute
    z-index: 1
    top: -2.5rem
    right: -2.5rem
    width: 5rem
    height: 5rem
    background: $light url('~@/assets/img/icon-times.svg') center center no-repeat
    background-size: 2.5rem 2.5rem
    border-radius: 2.5rem
    border: 0.25rem solid $dark
  .backdrop
    z-index: -1
    position: fixed
    @include fillContainer
    background: $backdrop


</style>