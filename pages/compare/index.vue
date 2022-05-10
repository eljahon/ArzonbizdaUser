<script>
import { CSimpleGrid } from '@chakra-ui/vue'
import CompareProduct from '~/my-components/comparing-component/CompareProduct.vue'
import CompareProductMobile from '~/my-components/comparing-component/CompareProductMobile.vue'
import CompareTab from '~/my-components/compare-tabs/CompareTab.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'

export default {
  name: 'ComparePage',
  components: {
    CompareProduct,
    CSimpleGrid,
    CompareProductMobile,
    CompareTab,
    ProductSlider,
  },
}
</script>
<template>
  <c-simple-grid
    :columns="2"
    :spacing="['10px', '12px', '16px', '30px', '30px', '30px']"
    mt="40px"
  >
    <product-slider />
    <product-slider />
    <compare-product />
    <compare-product />
    <compare-product-mobile />
    <compare-product-mobile />
    <compare-tab />
    <compare-tab />
  </c-simple-grid>
</template>
1
