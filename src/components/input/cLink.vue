<template>
    <router-link class="" :to="location">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
  name:'cLink',
  props: {
    location: {
      type: [String, Object],
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>