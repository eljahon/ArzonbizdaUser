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
import BrandComponent from '~/components/brands-component/brandComponent.vue'
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
        { img: 'acer.png' },
        { img: 'apple.png' },
        { img: 'asus.png' },
        { img: 'dell.png' },
        { img: 'HP.png' },
        { img: 'lenovo.png' },
        { img: 'LG.png' },
        { img: 'midea.png' },
        { img: 'samsung.png' },
        { img: 'sony.png' },
        { img: 'versace.png' },
        { img: 'xiaomi.png' },
      ],
    }
  },
}
</script>
