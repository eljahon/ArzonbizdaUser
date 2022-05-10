<script>
import { CSimpleGrid } from '@chakra-ui/vue'
import CompareProduct from '~/my-components/comparing-component/CompareProduct.vue'
import CompareProductMobile from '~/my-components/comparing-component/CompareProductMobile.vue'

export default {
  name: 'ComparePage',
  components: { CompareProduct, CSimpleGrid, CompareProductMobile },
}
</script>
<template>
  <c-simple-grid
    :columns="2"
    :spacing="['10px', '12px', '16px', '30px', '30px', '30px']"
    mt="40px"
  >
    <compare-product />
    <compare-product />
    <compare-product-mobile />
    <compare-product-mobile />
  </c-simple-grid>
</template>
1
