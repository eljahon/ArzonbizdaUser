<script>
import { CSimpleGrid, CBox } from '@chakra-ui/vue'
import CompareProduct from '~/my-components/comparing-component/CompareProduct.vue'
import CompareTab from '~/my-components/compare-tabs/CompareTab.vue'
import CompareProductMobile from '~/my-components/comparing-component/CompareProductMobile.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'
// import ProductSlider from '~/my-components/product-slider/.vue'

export default {
  name: 'ComparePage',
  components: {
    CompareProduct,
    CSimpleGrid,
    CBox,
    CompareTab,
    CompareProductMobile,
    ProductSlider,
  },
}
</script>
<template>
  <c-box>
    <c-simple-grid :columns="2" :spacing="'30px'">
      <product-slider />
      <product-slider />
      <compare-product />
      <compare-product />
      <compare-product-mobile />
      <compare-product-mobile />
      <compare-tab />
      <compare-tab />
    </c-simple-grid>
  </c-box>
</template>
