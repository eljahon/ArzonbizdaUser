<script>
// import ProductSliderVue from '~/my-components/product-slider/ProductSlider.vue'
import PriceRangeSlider from '~/my-components/price-slider/PriceRangeSlider.vue'
export default {
  name: 'UserComponent',
  components: {
    // ProductSliderVue,
    PriceRangeSlider,
  },
}
</script>

<template>
  <div>
    <PriceRangeSlider />
    <!-- <ProductSliderVue /> -->
  </div>
</template>
