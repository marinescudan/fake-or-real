<template>
  <article class="c-page">
    <slot></slot>
  </article>
</template>

<script>
export default {
  name:'cPage'
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.c-page
  box-sizing: border-box
  height: 100%
  overflow: hidden
  display: block

</style>