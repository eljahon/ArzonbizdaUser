<script>
import TabsComponents from '~/my-components/productPageTab/tab/TabsComponents.vue'
import TabsProducts from '~/my-components/productPageTab/TabsProducts/TabsProducts.vue'
import ProductFirstSlider from '~/my-components/product-slider/ProductSlider.vue'

export default {
  name: 'UserComponent',
  components: {
    TabsComponents,
    TabsProducts,
    ProductFirstSlider,
  },
}
</script>
<template>
  <div>
    <ProductFirstSlider />
    <TabsComponents />
    <TabsProducts />
  </div>
</template>
