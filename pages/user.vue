<script>
import CategoryMain from '~/my-components/categories-component/CategoryMain.vue'
// import ProductSlider from '../my-components/product-slider/ProductSlider.vue'
export default {
  name: 'UserComponent',
  components: {
    CategoryMain,
    // ProductSlider,
  },
}
</script>

<template>
  <div>
    <!-- <ProductSlider /> -->
    <CategoryMain />
  </div>
</template>
