<script>
import BreadCumb from '../../my-components/breadcumb/Breadcumb.vue'
import ProductDescription from '~/my-components/product-description/ProductDescription.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'
import ChakraTab from '~/my-components/productPageTab/TabsProducts/ChakraTab.vue'
import Mixins from '@/mixins/aos'
export default {
  name: 'ProductPageList',
  components: {
    BreadCumb,
    ProductDescription,
    ProductSlider,
    ChakraTab,
  },
  mixins: [Mixins],

  layout: 'ProductLayout',

  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`product/${params.id}`)

    const propsList = {
      imageList: data.product.images,
      name: data.product.name,
      price: data.product.price,
      disc: data.product.description,
      compares: data.compares,
      shop: data.product['shop.name'],
      link: data.product.link,
      logo: data.product['shop.logo'],
      shopLink: data.product['shop.link'],
    }

    return {
      propsList,
      data,
    }
  },

  data() {
    return {
      route: this.$route,
      propsList: {
        imageList: [],
        name: '',
        price: null,
        disc: '',
        compares: [],
        shop: '',
        link: '',
        logo: '',
        shopLink: '',
      },
    }
  },

  mounted() {
    this.storeData()
  },
  methods: {
    storeData() {
      this.$store.dispatch('addBreadcumbs', this.route)
    },
  },
}
</script>

<template>
  <div>
    <BreadCumb />
    <LoaderComponent v-if="$store.state.loading" />
    <div class="product__page" data-aos="fade-up" data-aos-duration="1000">
      <ProductSlider :images="propsList.imageList" />
      <product-description :items="propsList" class="product__disc" />
    </div>

    <ChakraTab :selected-product="data" class="product__tab" />
  </div>
</template>

<style lang="scss" scoped>
.product__page {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 30px;
  margin-top: 40px;
  align-items: center;
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
@media screen and (max-width: 768px) {
  .product__tab {
    margin-top: 260px;
  }
}
@media screen and (max-width: 425px) {
  .product__tab {
    margin-top: 190px;
  }
}
@media screen and (max-width: 375px) {
  .product__tab {
    margin-top: 190px;
  }
}
</style>
