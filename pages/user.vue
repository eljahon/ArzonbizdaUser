<script>
import TabsComponents from '~/my-components/productPageTab/tab/TabsComponents.vue'
import TabsProducts from '~/my-components/productPageTab/TabsProducts/TabsProducts.vue'
export default {
  name: 'UserComponent',
  components: { TabsProducts, TabsComponents },
}
</script>
<template>
  <div>
    <TabsComponents />
    <TabsProducts />
  </div>
</template>
