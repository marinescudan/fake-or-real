<template>
    <div class="modal" :class="{'hide': !show, 'show': show}">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name:'cModal',
  props: {
    show: {
      type: Boolean,
      required: true,
      default: function () {
        return false;
      }
    }
  },
}
</script>

<style scoped lang="sass">
@import "@/styles/_variables.sass";
@import "@/styles/_mixins.sass";


.modal
  display: block !important
  position: fixed !important
  z-index: 3
  top: 0
  left: 0
  width: 100%
  height: 100%
  @include transitionEffect

.modal::after
  content: ""
  background: $backdrop
  position: fixed
  z-index: 0
  top: 0
  left: 0
  width: 100%
  height: 100%

.content
  background: white
  position: relative
  z-index: 1
  height: 80rem
  top: 20rem
  width: 140rem
  left: calc(50% - 70rem)
  padding: 4rem
  box-shadow: 1rem 1.25rem 2.5rem rgb(0, 0, 0)
  border-radius: 0.5rem
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  @include transitionEffect

.modal.hide
  visibility: hidden
  opacity: 0

.modal.show
  visibility: visible
  opacity: 1

.hide .content
  transform: scale(0.01)

.show .content
  transform: scale(1)

</style>
