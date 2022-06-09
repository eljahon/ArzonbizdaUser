<script>
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import { CIcon, CInput, CFlex } from '@chakra-ui/vue'

export default {
  name: 'PriceRangeSlider',

  components: {
    CIcon,
    CInput,
    CFlex,
    VueSlider,
  },

  data() {
    return {
      value: [1, 30],
      realMin: null,
      realMax: null,
      search: this.$route.query.search ? this.$route.query.search : '',
    }
  },
  computed: {
    minData() {
      return this.value[0] * 100000
    },
    maxData() {
      return this.value[1] * 100000
    },
  },
  watch: {
    maxData(newVal, oldVal) {
      this.realMax = newVal
    },
    minData(newVal, oldVal) {
      this.realMin = newVal
    },
  },
  methods: {
    getSearchData() {
      this.$router.push({
        path: this.localePath('/search'),
      })

      this.$store.dispatch('changePriceProducts', {
        axios: this.$axios,
        searchQ: '',
        maxPrice: this.realMin,
        minPrice: this.realMax,
      })
      this.$axios
        .get('product/search', {
          params: {
            max: this.realMax,
            min: this.realMin,
            q: '',
          },
        })
        .then((res) => {
          console.log(res)
        })
    },
  },
}
</script>

<template>
  <div class="slider__price">
    <div>
      <vue-slider v-model="value"></vue-slider>
    </div>

    <CFlex align="center" gap="9px" mt="29px">
      <c-input
        v-model="realMin"
        type="number"
        color="color.InputColor"
        :_focus="false"
        w="103px"
        border-radius="12px"
        border-color="borders.InputBorder"
        bg="transparent"
        placeholder="от"
      />

      <CIcon name="priceIcon" />

      <c-input
        v-model="realMax"
        type="number"
        color="color.InputColor"
        :_focus="false"
        w="103px"
        border-radius="12px"
        border-color="borders.InputBorder"
        bg="transparent"
        placeholder="до"
      />

      <c-button
        background-color="color.TextColor2"
        color="white"
        cursor="pointer"
        _focus="{{}}"
        border-radius="12px"
        _hover="{{}}"
        font-weight="300"
        type="submit"
        @click="getSearchData"
      >
        {{ $t('search') }}
      </c-button>
    </CFlex>
  </div>
</template>

<style>
.slider__price {
  margin-top: 32px;
}
.vue-slider {
  background: #e3e5e5;
  border-radius: 12px;
  height: 6px !important;
  padding: 0 !important;
}
.vue-slider-process {
  background: red;
}
.vue-slider-dot {
  border-radius: 12px;
  background: #4a4d4d;
}
.vue-slider-dot-tooltip {
  display: none;
}
</style>
