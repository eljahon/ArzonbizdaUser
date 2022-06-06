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
    <c-flex
      :max-w="['64px', '94px', '124px', '154px', '184px', '215px']"
      flex-direction="column"
      align="center"
      justify="center"
    >
      <c-image
        :src="require(`@/assets/img/${item.img}`)"
        :width="['52px', '62px', '72px', '83px', '94px', '104px']"
        h="auto"
      />
      <c-text
        :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
        :line-height="['12px', '13px', '14px', '16px', '18px', '20px']"
        font-weight="700"
        color="color.TextColor1"
        text-align="center"
        mt="16px"
        >{{ item.name }}</c-text
      >
    </c-flex>
  </CThemeProvider>
</template>
