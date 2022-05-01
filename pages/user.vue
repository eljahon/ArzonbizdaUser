<script>
import TabsComponents from '~/my-components/productPageTab/tab/TabsComponents.vue'
import TabsProducts from '~/my-components/productPageTab/TabsProducts/TabsProducts.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'

export default {
  name: 'UserComponent',
  components: { TabsProducts, TabsComponents, ProductSlider },
}
</script>
<template>
  <div>
    <ProductSlider />
    <TabsComponents />
    <TabsProducts />
  </div>
</template>
