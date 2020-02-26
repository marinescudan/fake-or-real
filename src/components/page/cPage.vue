<template>
  <article class="c-page" :style="styles">
    <slot></slot>
  </article>
</template>

<script>
export default {
  name:'cPage',
  props: {
    rows: { type: String, required: false },
    gap: { type: String, required: false },
  },
  computed: {
    styles: function () {
      return `
        grid-template-rows: ${this.rows};
        grid-template-gap: ${this.gap};
      `
    }
  }
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";

.c-page
  height: 100vh
  padding: 0
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: 1fr
  grid-row-gap: 0vh
  justify-items: stretch
  align-items: stretch

.c-page > *
  overflow: hidden

</style>