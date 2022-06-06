<script>
import { CThemeProvider, CFlex, CText } from '@chakra-ui/vue'

export default {
  name: 'CategoryComponent',

  components: {
    CFlex,
    CThemeProvider,
    CText,
  },

  props: ['item'],
}
</script>

<template>
  <CThemeProvider>
    <CFlex
      class="category"
      :max-w="['52px', '84px', '116px', '148px', '180px', '215px']"
      flex-direction="column"
      align="center"
      justify="center"
    >
      <CImage
        :src="require(`@/assets/img/${item.img}`)"
        :width="['52px', '62px', '72px', '83px', '94px', '104px']"
        h="auto"
      />
      <CBox>
        <CText
          class="text"
          font-family="Yandex Sans Display"
          :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
          :line-height="['12px', '13px', '14px', '16px', '18px', '20px']"
          font-weight="700"
          color="color.TextColor1"
          text-align="center"
          :mt="['10px', '13px', '16px', '20px', '24px', '26px']"
          >{{ item.name }}</CText
        >
      </CBox>
    </CFlex>
  </CThemeProvider>
</template>

<style lang="scss" scoped>
@media screen and(max-width: 800px) {
  .text {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
