<script>
import { CGrid, CBox } from '@chakra-ui/vue'
import CompareProduct from '~/my-components/comparing-component/CompareProduct.vue'
import CompareTab from '~/my-components/compare-tabs/CompareTab.vue'
import CompareProductMobile from '~/my-components/comparing-component/CompareProductMobile.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'
import LoaderComponent from '~/library/LoaderComponent.vue'

export default {
  name: 'ComparePage',

  components: {
    CompareProduct,
    CGrid,
    CBox,
    CompareTab,
    CompareProductMobile,
    ProductSlider,
    LoaderComponent,
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
      const query = { prs: this.$store.state.isBadge }
      this.loading = true
      const { data } = await this.$axios.get('product/compare', {
        params: query,
      })
      this.loading = false
      this.products = data.data.products
    },
  },
}
</script>

<template>
  <c-box>
    <loader-component v-if="loading" />

    <div v-if="!loading">
      <c-grid template-columns="repeat(2, 50%)" gap="6" mt="64px">
        <div v-for="(item, id) in products" :key="id" class="compare__wrapper">
          <product-slider :images="item.images" class="product__slider" />
          <compare-product class="compare__product" :item="item" />
          <compare-product-mobile :item="item" />
          <compare-tab :item="item" />
        </div>
      </c-grid>
    </div>
  </c-box>
</template>

<style lang="scss" scoped>
.compare__wrapper {
  padding-right: 20px;
}
.compare__product {
  margin-top: 40px;
}
</style>
