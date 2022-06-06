<script>
import { CThemeProvider, CBox, CText } from '@chakra-ui/vue'

export default {
  components: {
    CThemeProvider,
    CBox,
    CText,
  },
  props: ['descriptionText'],
}
</script>
<template>
  <CThemeProvider>
    <CBox>
      <CText
        :display="['none', 'none', 'none', 'block', 'block', 'block']"
        width="100%"
        :mt="['50px', '60px', '70px', '80px', '90px', '90px']"
        color="color.TextColor1"
        :font-size="['10px', '11px', '12px', '13px', '15px', '16px']"
        font-family="Yandex Sans Display"
        :font-weight="400"
        :line-height="['12px', '15px', '18px', '20px', '25px', '28px']"
      >
        {{ descriptionText }}
      </CText>
    </CBox>
  </CThemeProvider>
</template>

<style></style>
