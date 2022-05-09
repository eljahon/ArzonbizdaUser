<script>
import { CThemeProvider, CBox, CText } from '@chakra-ui/vue'
export default {
  components: {
    CThemeProvider,
    CBox,
    CText,
  },
}
</script>
<template>
  <CThemeProvider>
    <c-box padding="24px 45px">
      <c-text
        font-family="Yandex Sans Display"
        font-size="16px"
        font-weight="300"
        font-style="normal"
        line-height="24px"
        color="color.TextColor1"
      >
        {{ $t('lorem') }}
      </c-text>
    </c-box>
  </CThemeProvider>
</template>

<style></style>
