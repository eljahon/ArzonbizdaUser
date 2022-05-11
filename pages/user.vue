<script>
import SingleStar from '~/library/SingleStar.vue'
import CategoryMain from '~/my-components/categories-component/CategoryMain.vue'
// import ProductSlider from '../my-components/product-slider/ProductSlider.vue'
export default {
  name: 'UserComponent',
  components: {
    CategoryMain,
    SingleStar,
    // ProductSlider,
  },
}
</script>

<template>
  <div>
    <!-- <ProductSlider /> -->
    <CategoryMain />
    <single-star :size="'70px'" :rating="'3'" />
  </div>
</template>
