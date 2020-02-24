<template>
  <div id="app" class="app vh-100">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.$store.dispatch('getQuizList')
  }
}
</script>

<style lang="sass">
@import "@/styles/_main.sass";

.app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center

</style>
