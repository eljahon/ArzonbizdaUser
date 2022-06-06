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
    <c-box
      :padding="[
        '15px 25px',
        '15px 25px',
        '15px 20px',
        '20px 40px',
        '22px 43px',
        '24px 45px',
      ]"
    >
      <c-text
        font-family="Yandex Sans Display"
        :font-size="['12px', '13px', '12px', '12px', '16px', '16px']"
        :line-height="['15px', '17px', '19px', '20px', '23px', '24px']"
        font-weight="300"
        font-style="normal"
        color="color.TextColor1"
      >
        {{ $t('lorem') }}
      </c-text>
    </c-box>
  </CThemeProvider>
</template>

<style></style>
