<script>
import { CFlex } from '@chakra-ui/vue'
import ProductDescription from '~/my-components/product-description/ProductDescription.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'
import ChakraTab from '~/my-components/productPageTab/TabsProducts/ChakraTab.vue'

import aos from '@/helpers/aos'

import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'

export default {
  name: 'ProductPage',

  components: {
    ProductDescription,
    ProductSlider,
    CFlex,
    ChakraTab,
  },

  mixins: [
    {
      methods: {
        aos,
      },
    },
  ],

  layout: 'ProductLayout',

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
      productData: data,
    }
  },

  mounted() {
    AOS.init({})
  },
}
</script>

<template>
  <div class="product__page" data-aos="fade-up" data-aos-duration="1000">
    <c-flex gap="30px" mt="64px">
      <LoaderComponent v-if="$store.state.loading" />
      <ProductSlider :images="props.imageList" />
      <product-description :items="props" class="product__disc" />
    </c-flex>
    <ChakraTab :selected-product="productData" />
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 1200px) {
  .product__disc {
    display: none;
  }
}
</style>
