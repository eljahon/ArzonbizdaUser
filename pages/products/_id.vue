<script>
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
    ChakraTab,
  },

  mixins: [
    {
      methods: {
        aos,
      },
    },
  ],

  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`/product/${params.id}`)

    const propsList = {
      imageList: data.product.images,
      name: data.product.name,
      price: data.product.price,
      disc: data.product.description,
      compares: data.compares,
      shop: data.product['shop.name'],
      link: data.product.link,
      logo: data.product['shop.logo']
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
  <CBox>
    <LoaderComponent v-if="$store.state.loading" />
    <div class="product__page">
      <ProductSlider :images="props.imageList" />
      <product-description :items="props" class="product__disc" />
    </div>
    <ChakraTab :selected-product="productData" />
  </CBox>
</template>

<style lang="scss" scoped>
.product__page {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 30px;
  margin-top: 40px;
}

@media screen and (max-width: 1024px) {
  .product__page {
    display: grid;
    grid-template-columns: repeat(1, 100%);
  }
  .product__disc {
    display: none;
  }
}
</style>
