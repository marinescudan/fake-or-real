<!--------------

Custom Button Component
*************

Template snippet:
  <c-button :action="method" data="{}">lable</c-button>

Script snippet:
  import buttonDefault from '@/components/input/buttonDefault';

  methods: {
    method function (data) {
      console.log(data);
    }
  }

---------------->

<template>
    <button @click="action(data)" class="c-button" type="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name:'buttonDefault',
  props: {
    action: {
      type: Function,
      required: true
    },
    data: {
      type: Object,
      required: false
    }
  }
}
</script>

<style scoped lang="scss">
// @import "@/style/_main.sass";

// .c-button {
//   display: inline-block;
// }
</style>