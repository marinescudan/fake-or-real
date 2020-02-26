<template>
  <div class="c-videos-explanation pt3">
    <c-row>
      <c-col class="c-w-8">
        <c-row>
          <c-col class="c-w-6">
            <h3 class="pb2">{{ $t("QUESTION.SUBTITLE")}}</h3>
          </c-col>
          <c-col class="c-w-6">
          </c-col>
        </c-row>
        <c-row>
          <c-col class="c-w-12">
            <p class="two-columns">{{videosItem.text}}</p>
          </c-col>
        </c-row>
      </c-col>
      <c-col class="c-w-4">
        <c-videos-explanation-item :videosItem="videosItem"></c-videos-explanation-item>
        <c-videos-explanation-item :videosItem="videosItem"></c-videos-explanation-item>
      </c-col>
    </c-row>
  </div>
</template>

<script>
import {layout, media, form} from '@/mixins/components';
import cVideosExplanationItem from '@/components/content/videos/cVideosExplanationItem';

export default {
  name:'cVideosExplanation',
  mixins: [layout, media, form],
  components: { cVideosExplanationItem },
  props: {
    videosData: { type: Object, required: false },
  },
  data: function () {
    return {
      videosItem: {
        num: 1,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.`
      },
    }
  },
  computed: { }
}
</script>

<style scoped lang="sass">
// @import "@/styles/_variables.sass";

.c-videos-explanation
  display: block

</style>