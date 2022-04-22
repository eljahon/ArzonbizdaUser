<template>
  <CThemeProvider>
    <div class="categories_list">
      <c-flex align="center" justify="space-between" mb="40px">
        <h1 class="main_header">Бренды</h1>
        <view-all />
      </c-flex>

      <c-grid
        template-columns="repeat(4, minmax(52px, 215px))"
        :row-gap="['12px', '22px', '32px', '40px']"
        :column-gap="['42px', '38px', '34px', '30px']"
        justify-items="center"
        justify-content="center"
      >
        <c-grid-item v-for="item in categoryItem" :key="item">
          <brand-component :item="item" />
        </c-grid-item>
      </c-grid>
    </div>
  </CThemeProvider>
</template>
<script>
import { CThemeProvider, CGrid, CGridItem } from '@chakra-ui/vue'
import BrandComponent from '~/my-components/brands-component/brandComponent.vue'
import ViewAll from '~/library/ViewAll.vue'
export default {
  name: 'CategoriesComponent',
  components: {
    BrandComponent,
    ViewAll,
    CThemeProvider,
    CGrid,
    CGridItem,
  },
  data() {
    return {
      categoryItem: [
        { img: 'acer.png', name: 'Acer' },
        { img: 'apple.png', name: 'Apple' },
        { img: 'asus.png', name: 'Asus' },
        { img: 'dell.png', name: 'Dell' },
        { img: 'HP.png', name: 'HP' },
        { img: 'lenovo.png', name: 'Lenovo' },
        { img: 'LG.png', name: 'LG' },
        { img: 'midea.png', name: 'Midea' },
        { img: 'samsung.png', name: 'Samsung' },
        { img: 'sony.png', name: 'Sony' },
        { img: 'versace.png', name: 'Versace' },
        { img: 'xiaomi.png', name: 'Xiaomi' },
      ],
    }
  },
}
</script>
