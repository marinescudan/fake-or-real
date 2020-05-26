<template>
    <main class="c-main" :style="styles">
      <slot></slot>
    </main>
</template>

<script>
export default {
  name:'cMain',
  props: {
    width: { type: Number, required: false },
  },
  computed: {
    styles: function () {
      return `
        padding: 0 ${ this.width ? (100 - this.width) / 2 : 0 }vw;
      `
    }
  }
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.c-main
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  justify-content: center
  align-content: stretch
  align-items: stretch

.c-main > *
  @include flex-col-item

</style>
