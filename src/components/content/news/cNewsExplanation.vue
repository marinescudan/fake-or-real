<template>
  <div class="c-news-explanation pt3">
    <c-row>
      <c-col class="c-w-8">
        <c-row>
          <c-col class="c-w-6">
            <h3 class="pb2">{{ $t("QUESTION.SUB_TITLE")}}</h3>
          </c-col>
          <c-col class="c-w-6">
          </c-col>
        </c-row>
        <c-row>
          <c-col class="c-w-12">
            <p class="two-columns">{{newsItem.text}}</p>
          </c-col>
        </c-row>
      </c-col>
      <c-col class="c-w-4">
        <c-news-explanation-item :newsItem="newsItem"></c-news-explanation-item>
        <c-news-explanation-item :newsItem="newsItem"></c-news-explanation-item>
        <c-news-explanation-item :newsItem="newsItem"></c-news-explanation-item>
        <c-news-explanation-item :newsItem="newsItem"></c-news-explanation-item>
      </c-col>
    </c-row>
  </div>
</template>

<script>
import {layout, media, form} from '@/mixin/components';
import cNewsExplanationItem from '@/components/content/news/cNewsExplanationItem';

export default {
  name:'cNewsExplanation',
  mixins: [layout, media, form],
  components: { cNewsExplanationItem },
  props: {
    newsData: { type: Object, required: false },
  },
  data: function () {
    return {
      newsItem: {
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

.c-news-explanation
  display: block

</style>