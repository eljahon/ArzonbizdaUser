<template>
  <div>
    <CThemeProvider>
      <CBox mb="4">
        <CText mb="2" color="color.InputColor" font-weight="700">{{
          $t(title)
        }}</CText>
        <hr />
      </CBox>
    </CThemeProvider>
  </div>
</template>

<script>
import { CThemeProvider, CText, CBox } from '@chakra-ui/vue'

export default {
  name: 'FilterHeader',

  components: {
    CThemeProvider,
    CText,
    CBox,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
