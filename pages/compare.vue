<script>
import { CSimpleGrid, CBox } from '@chakra-ui/vue'
import CompareProduct from '~/my-components/comparing-component/CompareProduct.vue'
import CompareTab from '~/my-components/compare-tabs/CompareTab.vue'
import CompareProductMobile from '~/my-components/comparing-component/CompareProductMobile.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'

export default {
  name: 'ComparePage',
  components: {
    CompareProduct,
    CSimpleGrid,
    CBox,
    CompareTab,
    CompareProductMobile,
    ProductSlider,
  },
  data() {
    return {
      loading: false,
      products: null,
      error: null,
    }
  },
  mounted() {
    this.fetchItems()
  },
  methods: {
    async fetchItems() {
      // const query = { prs: this.$store.state.isBadge }
      this.loading = true
      const { data } = await this.$axios.get(
        'http://arzonbizda.herokuapp.com/product/compare',
        {
          params: {
            prs: [
              'fef225f3-08b6-4a91-a8e5-a1627f7ec23c',
              'fef225f3-08b6-4a91-a8e5-a1627f7ec23c',
            ],
          },
        }
      )
      this.loading = false
      this.products = data.data.products
      console.log(data)
    },
  },
}
</script>
<template>
  <c-box>
    <c-simple-grid :columns="2" :spacing="'30px'">
      <div v-if="!loading">
        <div v-for="(item, index) in products" :key="index">
          <product-slider :images="item.images" />
          <compare-product item />
          <compare-product-mobile item />
          <compare-tab item />
        </div>
      </div>
    </c-simple-grid>
  </c-box>
</template>
