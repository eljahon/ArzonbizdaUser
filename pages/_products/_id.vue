<script>
import {} from '@chakra-ui/vue'
import BreadCumb from '../../my-components/breadcumb/Breadcumb.vue'

import ProductDescription from '~/my-components/product-description/ProductDescription.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'
import ChakraTab from '~/my-components/productPageTab/TabsProducts/ChakraTab.vue'

import aos from '@/helpers/aos'

import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'

export default {
  name: 'ProductPage',

  components: {
    BreadCumb,
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

  layout: 'ProductLayout',

  data() {
    return {
      route: this.$route,
      loading: false,
    }
  },

  mounted() {
    this.storeData()
    AOS.init({})
  },

  methods: {
    storeData() {
      this.$store.dispatch('addBreadcumbs', this.route)
    },

    showToast(title, text) {
      this.$toast({
        title: title ?? 'An error occurred.',
        description: text ?? 'Unable to load sharingan. Please shadow clones.',
        status: 'error',
        duration: 10000,
        position: 'top',
      })
    },

    async asyncData({ $axios, params }) {
      this.loading = true

      try {
        const { data } = await $axios.get(`/product/${params.id}`)

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
          props: propsList,
          productData: data,
        }
      } catch (err) {
        this.showToast('Serverda muammo bor', "Birozdan so'ng urinib ko'ring")
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<template>
  <div>
    <BreadCumb />
    <LoaderComponent v-if="$store.state.loading" />
    <div class="product__page" data-aos="fade-up" data-aos-duration="1000">
      <ProductSlider :images="props.imageList" />
      <product-description :items="props" class="product__disc" />
    </div>

    <ChakraTab :selected-product="productData" class="product__tab" />
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
    margin-top: 235px;
  }
}
@media screen and (max-width: 425px) {
  .product__tab {
    margin-top: 168px;
  }
}
@media screen and (max-width: 375px) {
  .product__tab {
    margin-top: 123px;
  }
}
</style>
