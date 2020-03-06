<template>
    <button @click="action(data)" class="c-button" type="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name:'cButton',
  props: {
    action: {
      type: Function,
      required: true
    },
    data: {
      type: Object,
      required: false,
      default: function(){return {}}
    }
  }
}
</script>

<style scoped lang="sass">
@import "@/styles/_mixins.sass";
@import "@/styles/_variables.sass";

.c-button
  // @include frameLight

</style>