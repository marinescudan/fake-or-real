<template>
  <div class="c-news-explanation pt3">
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
            <!-- <p class="two-columns" v-html="$t('START.MESSAGE', {'h': 'hello'})"></p> -->
            <p class="two-columns" v-html="newsItem.text"></p>
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
import {layout, media, form} from '@/mixins/components';
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
        text: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adip isicing elit. Sed distinct isicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipio modi maiores quasi sunt totam vosunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi luptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.</p>
        <p>Lorem ipsum do adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam vo veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.</p>
        <p>Lorem ipsum dolor sit amet consectetur ad luptatum mollitia corrupti ipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed distinctio modi maiores quasi sunt totam voluptatum mollitia corrupti veritatis id accusamus, excepturi accusantium eligendi minima molestiae eaque omnis cumque? Deleniti.</p>`
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