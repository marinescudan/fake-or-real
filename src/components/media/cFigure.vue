<template>
    <figure class="c-figure">
        <img :src="url_builder(src)" :alt="alt" :title="title" :width="width" :height="height"/>
    </figure>
</template>

<script>
export default {
  name:'cFigure',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    width: {
      type: String,
      required: false,
      default: function () {return '100%';}
    },
    height: {
      type: String,
      required: false,
      default: function () {return '100%';}
    }
  },
  methods: {
    url_builder: function (url) {
      return url;
    },
  },
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.c-figure
  margin: 0
  position: relative
  @include imageBackground
  img
    position: relative

.selected
  background: $white
  .c-figure::before
    position: absolute
    content: ""
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 3
    @include selectedBackground

</style>