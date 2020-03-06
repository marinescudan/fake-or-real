<template>
    <div class="c-card frame">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name:'cCard'
}
</script>

<style scoped lang="sass">
@import "@/styles/_mixins.sass";
@import "@/styles/_variables.sass";

.c-card
  height: 100%
  // @include frameLight

</style>