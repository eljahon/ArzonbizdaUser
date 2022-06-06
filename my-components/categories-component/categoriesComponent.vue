<script>
import { CThemeProvider, CSimpleGrid, CBox } from '@chakra-ui/vue'
import CategoryComponent from '~/my-components/categories-component/categoryComponent.vue'
import ViewAll from '~/library/viewAll.vue'

export default {
  name: 'CategoriesComponent',
  components: {
    CategoryComponent,
    CThemeProvider,
    CSimpleGrid,
    CBox,
    ViewAll,
  },

  data() {
    return {
      categoryItem: [
        { img: 'category1.png', name: 'Очистители и увлажнители воздуха' },
        { img: 'category2.png', name: 'Очистители и увлажнители воздуха' },
        { img: 'category3.png', name: 'Очистители и увлажнители воздуха' },
        { img: 'category4.png', name: 'Очистители и увлажнители воздуха' },
        { img: 'category5.png', name: 'Очистители и увлажнители воздуха' },
        { img: 'category6.png', name: 'Очистители и увлажнители воздуха' },
        { img: 'category7.png', name: 'Очистители и увлажнители воздуха' },
        { img: 'category8.png', name: 'Очистители и увлажнители воздуха' },
        { img: 'category9.png', name: 'Очистители и увлажнители воздуха' },
        { img: 'category10.png', name: 'Очистители и увлажнители воздуха' },
        { img: 'category11.png', name: 'Очистители и увлажнители воздуха' },
        { img: 'category12.png', name: 'Очистители и увлажнители воздуха' },
      ],
    }
  },
}
</script>

<template>
  <CThemeProvider>
    <CBox :mb="['30px', '41px', '52px', '64px', '76px', '88px']">
      <CFlex
        align="center"
        justify="space-between"
        :mb="['10px', '15px', '20px', '25px', '30px', '40px']"
      >
        <h1 class="main_header">{{ $t('category') }}</h1>
        <ViewAll />
      </CFlex>

      <CSimpleGrid
        :columns="['4', '4', '4', '4', '4', '6']"
        :rows="['2', '2', '2', '2', '2', '2']"
        spacing-x="30"
        :spacing-y="['18px', '22px', '26px', '30px', '34px', '40px']"
        justify-items="center"
        justify-content="center"
        class="categoriesGrid"
      >
        <CategoryComponent
          v-for="(item, idx) in categoryItem"
          :key="idx"
          :item="item"
          class="category__component"
        />
      </CSimpleGrid>
    </CBox>
  </CThemeProvider>
</template>

<style lang="scss" scoped>
.category__component {
  @media screen and(max-width: 62em) {
    &:nth-child(n + 9) {
      display: none;
    }
  }
  @media screen and(max-width: 350px) {
    &:nth-child(n + 7) {
      display: none;
    }
  }
}
.categoriesGrid {
  @media screen and(max-width: 350px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
