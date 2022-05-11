<script>
import { CFlex } from '@chakra-ui/vue'
import ProductDescription from '~/my-components/product-description/ProductDescription.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'
import ChakraTab from '~/my-components/productPageTab/TabsProducts/ChakraTab.vue'

export default {
  name: 'ProductPage',

  components: { ProductDescription, ProductSlider, CFlex, ChakraTab },

  async asyncData({ $axios, params }) {
    // console.log(params)
    const { data } = await $axios.get(`/product/${params.id}`)
    // console.log(data.data.product.images)

    // console.log(imageList.data.product.images)
    return {
      imageList: data.product.images,
    }
  },
}
</script>

<template>
  <div class="product__page">
    <c-flex gap="30px" mt="64px">
      <ProductSlider :images="imageList" />
      <product-description class="product-desc"/>
    </c-flex>
    <ChakraTab />
  </div>
</template>

<style>
  @media screen and (max-width:500px) {
    .product-desc{
      display: none;
    }
  }
</style>
