<template>
    <figure class="c-video">
        <img :src="src" :alt="alt" :title="title" :width="width" :height="height"/>
    </figure>
</template>

<script>
export default {
  name:'cVideo',
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

.c-video
  display: block
  margin: 0

</style>