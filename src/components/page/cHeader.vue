<template>
    <header class="c-header">
      <slot></slot>
    </header>
</template>

<script>
export default {
  name:'cHeader'
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.c-header
  @include flex-col
  justify-content: center
  box-sizing: border-box
  &.divider
    position: relative
    &::after
      content: ""
      position: absolute
      left: calc(33% + #{$gutter} / 2)
      bottom: 0
      width: calc(33% - #{$gutter} / 2)
      height: 1px
      background: $dark
      z-index: 1
</style>
