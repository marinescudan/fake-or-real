<template>
    <router-link class="frameLight" :to="location">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
  name:'buttonDefault',
  props: {
    location: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
// @import "@/style/_main.sass";

// .c-link {
//   display: inline-block;
// }
</style>