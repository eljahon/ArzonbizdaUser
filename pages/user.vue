<script>
import ChakraTab from '~/my-components/productPageTab/TabsProducts/ChakraTab.vue'
import PriceSlider from '~/my-components/price-slider/PriceSlider.vue'

export default {
  name: 'UserComponent',
  components: { ChakraTab, PriceSlider },
}
</script>

<template>
  <div>
    <ChakraTab />
    <PriceSlider />
  </div>
</template>
