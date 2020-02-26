<template>
    <figure class="c-figure">
        <img :src="src" :alt="alt" :title="title" :width="width" :height="height"/>
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
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
    }
  }
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";

.c-figure
  display: block
  margin: 0

</style>