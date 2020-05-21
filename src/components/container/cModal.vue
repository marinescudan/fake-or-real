<template>
    <div class="modal" :class="{'hide': !show, 'show': show}">
      <div class="wrapper pl5 pr5">
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
  top: 0px
  left: 0px
  width: 100%
  height: 100%
  @include transitionEffect

.modal::after
  content: ""
  background: rgba(0,0,0,0.7)
  position: fixed
  z-index: 0
  top: 0
  left: 0
  width: 100%
  height: 100%

.wrapper
  background: white
  position: relative
  top: 5%
  left: 5%
  height: 90%
  z-index: 1
  width: 90%
  box-shadow: 9px 10px 20px rgb(0, 0, 0)
  border-radius: 4px
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

.hide .wrapper
  transform: scale(0.01)

.show .wrapper
  transform: scale(1)

</style>
