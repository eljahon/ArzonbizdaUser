<script>
import { CSimpleGrid, CBox } from '@chakra-ui/vue'
import CompareProduct from '~/my-components/comparing-component/CompareProduct.vue'

export default {
  name: 'ComparePage',
  components: { CompareProduct, CSimpleGrid, CBox },
}
</script>
<template>
  <c-box>
    <c-simple-grid :columns="2" :spacing="'30px'" >
      <compare-product />
      <compare-product />
    </c-simple-grid>
  </c-box>
</template>

