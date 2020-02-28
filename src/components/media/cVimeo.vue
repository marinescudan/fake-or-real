<template>
  <!-- TODO: add all the props supported by the plugin -->
  <vue-vimeo-player
    ref="player"
    :video-id='videoId'
    :player-height="playerHeight"
    :player-width="playerWidth"
    @ready="onReady"
  ></vue-vimeo-player>
</template>

<script>
import { vueVimeoPlayer } from 'vue-vimeo-player';
export default {
  name:'cVimeo',
  components: { vueVimeoPlayer },
  data() {
      return {
          playerReady: false
      }
  },
  props: {
    videoId: {
      type: String,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: function () { return false },
      required:  false
    },
    playerWidth: {
      type: [String, Number],
      default: function () { return 640 },
      required:  false
    },
    playerHeight: {
      type: [String, Number],
      default: function () { return 320 },
      required:  false
    },
    'options': {
      type: Object,
      default: function () {	return {} },
      required:  false
    },
    'video-url': {
      type: String,
      default: function () { return undefined },
      required:  false
    },
    'loop': {
      type: Boolean,
      default: function () {	return false },
      required:  false
    },
    'controls': {
      type: Boolean,
      default: function () {	return true },
      required:  false
    },
  },
  methods: {
    onReady() {
        this.playerReady = true
    },
    play () {
        this.$refs.player.play()
    },
    pause () {
        this.$refs.player.pause()
    },
    mute () {
        this.$refs.player.mute()
    },
    unmute () {
        this.$refs.player.unmute()
    },
    update (videoID) {
        this.$refs.player.update(videoID)
    },
  }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";
// @import "@/styles/_mixins.sass";
</style>