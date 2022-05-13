<script>
import { CFlex } from '@chakra-ui/vue'
import ProductDescription from '~/my-components/product-description/ProductDescription.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'
import ChakraTab from '~/my-components/productPageTab/TabsProducts/ChakraTab.vue'

export default {
  name: 'ProductPage',

  components: {
    ProductDescription,
    ProductSlider,
    CFlex,
    ChakraTab
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`/product/${params.id}`)
    const propsList = {
      imageList: data.product.images,
      name: data.product.name,
      price: data.product.price,
      disc: data.product.description,
      compares: data.compares,
    }

    return {
      props: propsList,
      productData:data
    }
  },
}
</script>

<template>
  <div class="product__page">
    <c-flex gap="30px" mt="64px">
      <ProductSlider :images="props.imageList" />
      <product-description :items="props" />
    </c-flex>
    <ChakraTab :selected-product="productData"/>
  </div>
</template>

<style>
@media screen and (max-width: 500px) {
  .product-desc {
    display: none;
  }
}
</style>
