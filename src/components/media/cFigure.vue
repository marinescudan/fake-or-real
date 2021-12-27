<template>
    <figure class="c-figure" @keydown.esc="expand(false)">
      <div class="media-container">
        <img class="media" :src="url_builder(src)" :alt="alt" :title="title" :style="figureStyle"/>
        <button @click.stop="expand(true)" class="expand-btn" type="button" v-if="expandable && !expanded">&nbsp;</button>
      </div>
      <transition name="fade">
        <div class="media-modal" v-if="expanded" transition="expand" @click.stop="">
          <img class="media" :src="url_builder(src)" @click.stop=""/>
          <button @click.stop="expand(false)" class="close-btn" type="button">&nbsp;</button>
          <div class="backdrop" @click.stop="expand(false)"></div>
        </div>
      </transition>
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
    expandable: { type: Boolean, required: false, default: function (){return false;}},
    namespace: { type: String, required: false, default: function (){return null;}},
    figureStyle: { type: String, required: false, default: function (){return '';}}
  },
  data() {
      return { expanded: false }
  },
  computed: {
    ...mapState({
      quiz: state => state.quiz,
      item: function (state) {return state.quiz[this.itemIndex];}
    })
  },
  methods: {
    url_builder: function (url) {
      return url;
    },
    expand: function (bool) {
      this.expanded = bool;
    }
  }
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";


.c-figure
  position: relative
  min-height: 15rem
.fade-enter-active .c-figure
  @include imageBackground

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
    background-size: 2.5rem 2.5rem
    background: rgba(255,255,255,0.5) url('~@/assets/img/icon-expand.png') center center no-repeat
    @media all and (-ms-high-contrast:none)
      background: #ffffff
      background-image: url('~@/assets/img/icon-expand.png')
      background-position:  center center
      background-repeat: no-repeat

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
  z-index: 2
  position: fixed
  width: 100rem
  max-width: 96vw
  height: 100rem
  max-height: 96vh
  top: calc(50% - 50rem)
  left: calc(50% - 50rem)
  @include modalContainer
  @include border
  .media
    width: 100%
  .close-btn
    position: absolute
    z-index: 1
    top: -2.5rem
    right: -2.5rem
    width: 5rem
    height: 5rem
    border-radius: 50%
    @include timesBackground
    @include border
  .backdrop
    z-index: -1
    position: fixed
    @include fillContainer
    background: $backdrop


</style>