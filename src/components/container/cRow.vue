<template>
    <section class="c-row">
        <slot></slot>
    </section>
</template>

<script>
export default {
  name:'cRow'
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.c-row
  @include flex-row
  margin: 0 -#{$gutter / 2}

  & > *
    @include flex-row-item

</style>
