<script>
import { CThemeProvider, CSimpleGrid, CBox } from '@chakra-ui/vue'
import PopularProduct from './popularProduct.vue'
import ViewAll from '~/library/viewAll.vue'
export default {
  name: 'CategoriesComponent',
  components: {
    CThemeProvider,
    CSimpleGrid,
    CBox,
    PopularProduct,
    ViewAll,
  },

  data() {
    return {
      popular: [
        {
          id: 1,
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
        {
          img: 'poco.png',
          name: 'Xiaomi Poco X3 Pro 8/256GB',
          price: '3 324 000',
        },
      ],
    }
  },
}
</script>

<template>
  <CThemeProvider>
    <CBox mt="88px" :mb="['27px', '38px', '52px', '64px', '76px', '88px']">
      <CFlex
        align="center"
        justify="space-between"
        :mb="['10px', '15px', '20px', '25px', '30px', '40px']"
      >
        <h1 class="main_header">{{ $t('populargoods') }}</h1>
        <ViewAll />
      </CFlex>

      <CSimpleGrid
        :columns="['3', '3', '3', '4', '4', '5']"
        :spacing="['10px', '15px', '20px', '22px', '26px', '30px']"
        :rows="['1', '1', '2', '2', '3', '3']"
        justify-items="center"
        justify-content="center"
      >
        <CBox
          v-for="(item, idx) in popular"
          :key="idx"
          class="popular__product"
        >
          <PopularProduct :item="item" />
        </CBox>
      </CSimpleGrid>
    </CBox>
  </CThemeProvider>
</template>
<style lang="scss" scoped>
.popular__product {
  @media screen and(max-width: 62em) {
    &:nth-child(n + 10) {
      display: none;
    }
  }
  @media screen and(max-width: 48em) {
    &:nth-child(n + 7) {
      display: none;
    }
  }
  @media screen and(max-width: 30em) {
    &:nth-child(n + 4) {
      display: none;
    }
  }
}
</style>
