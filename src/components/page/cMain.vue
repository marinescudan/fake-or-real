<template>
    <main class="c-main">
      <slot></slot>
    </main>
</template>

<script>
export default {
  name:'cMain'
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.c-main
  @include flex-col
  box-sizing: border-box
  margin: 0 auto
  width: 98%
  justify-content: center
  overflow-x: hidden
  overflow-y: auto
</style>
