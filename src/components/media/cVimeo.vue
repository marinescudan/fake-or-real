<template>
  <div class="c-vimeo aspect-ratio aspect-ratio--16x9" :class="{'player-loading': !playerReady}">
    <vue-vimeo-player
      ref="player"
      :video-id="videoId"
      :player-height="playerHeight"
      :player-width="playerWidth"
      :options="options"
      @ready="onReady"
    ></vue-vimeo-player>
  </div>
</template>

<script>
import { vueVimeoPlayer } from 'vue-vimeo-player';
export default {
  name:'cVimeo',
  components: { vueVimeoPlayer },
  data() {
      return {
          playerReady: false,
      };
  },
  props: {
    videoId: {
      type: String,
      required: false
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
      default: function () { return '50vh' },
      required:  false
    },
    options: {
      type: Object,
      default: function () {	return {} },
      required:  false
    },
    videoUrl: {
      type: String,
      required:  false
    },
    loop: {
      type: Boolean,
      default: function () {	return false },
      required:  false
    },
    controls: {
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
@import "@/styles/_mixins.sass";
.c-vimeo.player-loading
  @include videoBackground
</style>