<script>
import { CThemeProvider, CBox, CText } from '@chakra-ui/vue'
import PriceRangeSlider from '../price-slider/PriceRangeSlider.vue'
import FilterHeader from './filterHeader.vue'

export default {
  name: 'CategoryFilter',

  components: {
    FilterHeader,
    CThemeProvider,
    CText,
    CBox,
    PriceRangeSlider,
  },

  data() {
    return {
      filters: [
        {
          name: 'tablet',
          value: 'tablet',
          count: 1632,
        },
        {
          name: 'telephone',
          value: 'phone',
          count: 877,
        },
        {
          name: 'tv',
          value: 'tv',
          count: 540,
        },
        {
          name: 'noutbook',
          value: 'noutbook',
          count: 647,
        },
        {
          name: 'smartWatch',
          count: 798,
        },
        {
          name: 'conditionair',
          count: 826,
        },
        {
          name: 'fridge',
          count: 994,
        },
        {
          name: 'monitor',
          count: 492,
        },
      ],

      brands: [
        {
          name: 'Samsung',
          value: 'samsung',
          count: 1632,
        },
        {
          name: 'Xiaomi',
          value: 'xiaomi',
          count: 647,
        },
        {
          name: 'LG',
          value: 'lg',
          count: 540,
        },
        {
          name: 'Apple',
          value: 'apple',
          count: 877,
        },
        {
          name: 'Motorolla',
          value: 'motorolla',
          count: 798,
        },
      ],
    }
  },
  methods: {},
}
</script>

<template>
  <div class="category-filter">
    <CThemeProvider>
      <FilterHeader title="category" />
      <div
        v-for="(items, index) in filters"
        :key="index"
        class="category__items"
        :value="items.value"
      >
        <c-flex gap="16px" align="center">
          <input type="checkbox" color="red" />
          {{ $t(items.name) }}
        </c-flex>

        <CText font-size="md" color="color.iconBg">
          {{ items.count }}
        </CText>
      </div>

      <CBox mt="40px">
        <FilterHeader title="brand" />

        <div
          v-for="(brand, index) in brands"
          :key="index"
          class="category__items"
          :value="brand.value"
          variant-color="red"
        >
          <c-flex gap="16px" align="center">
            <input type="checkbox" color="red" />
            {{ brand.name }}
          </c-flex>

          <CText font-size="md" color="color.iconBg"> {{ brand.count }} </CText>
        </div>
      </CBox>

      <CBox mt="40px">
        <FilterHeader title="cost" />
        <PriceRangeSlider />
      </CBox>
    </CThemeProvider>
  </div>
</template>

<style lang="scss" scoped>
.category-filter {
  width: 328px;
  margin-top: 48px;
}

.category__items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}
@media screen and (max-width: 1050px) {
  .category-filter {
    display: none;
  }
}
</style>
