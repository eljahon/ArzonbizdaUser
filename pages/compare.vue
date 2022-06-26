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
  async asyncData({ route, $axios, store }) {
    const query = { prs: [route.query.firstId, route.query.secondId] }
    const list = await $axios.get('product/compare', {
      params: query,
    })
    // const {data} = list
    const renderData = list.data.data.products;
    const dataList = [
      {
        name: renderData[0].name,
        image: renderData[0].images[0].src,
        id: renderData[0].images[0].product_id
      },
      {
        name: renderData[1].name,
        image: renderData[1].images[0].src,
        id: renderData[1].images[0].product_id
      }
    ]
    store.dispatch('setSelectId', dataList)
    return {
      renderData,
    }
  },
  data() {
    return {
      loading: false,
      products: null,
      error: null,
    }
  },
}
</script>

<template>
  <c-box>
    <loader-component v-if="loading" />

    <div v-if="!loading">
      <c-grid template-columns="repeat(2, 50%)" gap="6" mt="64px">
        <div v-for="(item,index) in renderData" :key="index" class="compare__wrapper">
          <product-slider :images="item.images" class="product__slider" />
          <compare-product class="compare__product" :item="item" />
          <compare-product-mobile :items="item" />
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
