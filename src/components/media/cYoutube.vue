<template>
  <div class="c-youtube aspect-ratio aspect-ratio--16x9">
    <youtube
      ref="youtube"
      :video-id="videoID"
      :resize="true"
      :fitParent="true"
    ></youtube>
  </div>
</template>

<script>
import { getIdFromUrl } from 'vue-youtube';
export default {
  name:'cYoutube',
  data: function () {
    return {
      options: {
        autoplay: false,
        resize: true,
        fitParent: true,
        resizeDelay: 1200
      }
    };
  },
  props: {
    videoUrl: {
      type: String,
      default: function () { return undefined },
      required:  true
    }
  },
  computed: {
    videoID() {
      return getIdFromUrl(this.videoUrl);
    }
  }
};
</script>

<style scoped lang="sass">
  @import "@/styles/_mixins.sass"

  .c-youtube
    overflow: hidden
    @include videoBackground

</style>