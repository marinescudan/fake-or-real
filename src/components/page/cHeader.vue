<template>
    <header class="c-header">
      <slot></slot>
    </header>
</template>

<script>
export default {
  name:'cHeader',
  props: { }
}
</script>

<style lang="sass" scoped>
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";

.c-header
  display: -ms-flexbox
  display: -webkit-flex
  display: flex
  -webkit-flex-direction: column
  -ms-flex-direction: column
  flex-direction: column
  -webkit-flex-wrap: wrap
  -ms-flex-wrap: wrap
  flex-wrap: wrap
  -webkit-justify-content: center
  -ms-flex-pack: center
  justify-content: center
  -webkit-align-content: stretch
  -ms-flex-line-pack: stretch
  align-content: stretch
  -webkit-align-items: center
  -ms-flex-align: center
  align-items: center

.c-header > *
  -webkit-order: 0
  -ms-flex-order: 0
  order: 0
  -webkit-flex: 0 1 auto
  -ms-flex: 0 1 auto
  flex: 0 1 auto
  -webkit-align-self: stretch
  -ms-flex-item-align: stretch
  align-self: stretch


</style>
