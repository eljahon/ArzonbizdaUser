<!-- <script>
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
    <c-grid
      :display="['block', 'block', 'block', 'grid', 'grid', 'grid']"
      class="grid__container"
      template-columns="repeat(2, 1fr)"
      gap="30px"
    >
      <c-box
        :display="['none', 'none', 'block', 'block', 'block', 'block']"
        class="grid__itemOne"
      >
        <compare-tab />
      </c-box>
      <c-box class="grid__itemTwo">
        <compare-tab />
      </c-box>
    </c-grid>
  </CThemeProvider>
</template>

<style scoped>
@media (max-width: 1309px) {
  .grid__container {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid__itemTwo {
    display: none;
  }
}
</style> -->

<template>
  <div>asdas</div>
</template>

<script>
export default {}
</script>
