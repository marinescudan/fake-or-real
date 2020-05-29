<template>
    <div class="c-col">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name:'cCol',
  props: { }
}
</script>

<style lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";

.c-col
  box-sizing: border-box
  padding-left: calc( #{$gutter} / 2 )
  padding-right: calc( #{$gutter} / 2 )
  @include flex-col

.c-col > *
  @include flex-col-item

@for $i from 1 through 12
  .c-w-#{ $i }
    width: calc( 100% / 12 * #{ $i } )

</style>