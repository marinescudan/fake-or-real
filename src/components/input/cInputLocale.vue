<template>
  <div class="c-input-locale">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in languages" :key="`Lang${i}`" :value="lang.value">{{ lang.lable }}</option>
    </select>
  </div>
</template>

<script>
import languages from '@/constants/languages';

export default {
  name:'cInputLocale',
  data: function () {
    return {
      languages
    }
  }
}
</script>

<style scoped lang="sass">

</style>