<script>
import { CSimpleGrid } from '@chakra-ui/vue'
import CompareProduct from '~/my-components/comparing-component/CompareProduct.vue'

export default {
  name: 'ComparePage',
  components: { CompareProduct, CSimpleGrid },
}
</script>
<template>
  <c-simple-grid :columns="2" :spacing="'30px'" mt="40px">
    <compare-product />
    <compare-product />
    
  </c-simple-grid>
</template>
