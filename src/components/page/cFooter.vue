<template>
    <footer class="c-footer">
      <slot></slot>
    </footer>
</template>

<script>
export default {
  name:'cFooter'
}
</script>

<style lang="sass" scoped>
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.c-footer
  @include flex-col
  justify-content: center
  box-sizing: border-box

</style>
