<script>
import { CFlex } from '@chakra-ui/vue'
import ProductDescription from '~/my-components/product-description/ProductDescription.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'
import ChakraTab from '~/my-components/productPageTab/TabsProducts/ChakraTab.vue'

export default {
  name: 'ProductPage',
  components: { ProductDescription, ProductSlider, CFlex, ChakraTab },
}
</script>

<template>
  <div class="product__page">
    <c-flex gap="30px" mt="64px">
      <ProductSlider />
      <product-description />
    </c-flex>
    <ChakraTab />
  </div>
</template>
