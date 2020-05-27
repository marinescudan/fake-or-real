<template>
    <figure class="c-figure aspect-ratio aspect-ratio--16x9">
        <img :src="src" :alt="alt" :title="title" :width="width" :height="height"/>
        <img v-bind:src="image_media_url(src)"/>
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
    // alt: {
    //   type: String,
    //   required: false
    // },
    // title: {
    //   type: String,
    //   required: false
    // },
    // width: {
    //   type: Number,
    //   required: false
    // },
    // height: {
    //   type: Number,
    //   required: false
    // }
  },
  methods: {
    image_media_url: function (url) {
      let arr  = url.split('/');
      let src = arr[arr.length - 1].split('.')[0];
      return `./img/questions/square/${src}.jpg`;
    },
  },
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.c-figure
  display: block
  margin: 0
  position: relative
  // @include imageBackground
  img
    // position: absolute
    width: 100%
    height: 100%
    // top: 0
    // left: 0
    // right: 0
    // bottom: 0

// .selected
//   background: rgba(255, 255, 255, 1)
//   .c-figure::before
//     content: ""
//     position: absolute
//     top: 0
//     right: 0
//     bottom: 0
//     left: 0
//     @include selectedBackground
//     z-index: 3

</style>