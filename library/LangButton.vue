<script>
import { CBox } from '@chakra-ui/vue'
export default {
  name: 'LanguageButton',
  components: {
    CBox,
  },
  props: {
    langOptions: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      locales: '',
    }
  },
  watch: {
    locales(event) {
      this.$router.push(this.switchLocalePath(event))
    },
  },
}
</script>

<template>
  <CBox
    class="for__bgImg"
    bg-repeat="no-repeat"
    bg-pos="14px 22px"
    bg-size="12px 12px"
    border="LangBorder"
    rounded="12px"
    z-index="2"
  >
    <CBox
      v-model="locales"
      as="select"
      width="none"
      py="16px"
      pl="36px"
      pr="14px"
      border="1px"
      placeholder="RU"
      line-height="24px"
      color="color.InputColor"
      cursor="pointer"
      z-index="1"
    >
      <option value="ru">RU</option>
      <option value="uz">UZB</option>
      <option value="en">ENG</option>
    </CBox>
  </CBox>
</template>

<style lang="scss" scoped>
.for__bgImg {
  background-image: url('@/assets/icons/globe.svg');
}
</style>
