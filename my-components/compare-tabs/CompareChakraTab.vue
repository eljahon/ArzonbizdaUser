<script>
import { CThemeProvider, CGrid, CBox } from '@chakra-ui/vue'
import CompareTab from './CompareTab.vue'

export default {
  components: {
    CThemeProvider,
    CGrid,
    CompareTab,
    CBox,
  },
}
</script>

<template>
  <CThemeProvider>
    <c-grid template-columns="repeat(2, 1fr)" gap="30px">
      <c-box>
        <compare-tab />
      </c-box>
      <c-box>
        <compare-tab />
      </c-box>
    </c-grid>
  </CThemeProvider>
</template>

<style scoped></style>
