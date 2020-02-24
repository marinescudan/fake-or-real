<template>
    <h1 v-bind:class="['c-heading', customClass]">
        <slot></slot>
    </h1>
</template>

<script>
export default {
  name:'cHeading',
  props: {
    customClass: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/style/_main.sass";

.c-heading
    display: block
    margin: 0
    padding: 0
    font-family: 'Jost400Book'
    font-weight: 400

.c-fs-3
    font-size: 5.9vh
    // letter-spacing: 0.185rem
    letter-spacing: 0.3vh
    line-height: 1.5

.c-fs-2
  font-size: 1.5rem
  line-height: 1

.c-fs-1
  font-size: 27px
  line-height: 1

</style>