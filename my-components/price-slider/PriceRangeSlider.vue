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
      value: [0, 30],
    }
  },
}
</script>

<template>
  <div class="slider__price">
    <div>
      <vue-slider
        v-model="value"
      ></vue-slider>
    </div>
    <CFlex align="center" gap="9px" mt="29px">
      <c-input
      v-model="value[0]"
        color="color.InputColor"
        _focus="none"
        w="103px"
        border-radius="12px"
        border-color="borders.InputBorder"
        bg="transparent"
        placeholder="от"
      />

      <CIcon name="priceSlider" />

      <c-input
      v-model="value[1]"
        color="color.InputColor"
        _focus="none"
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
        _focus="none"
        border-radius="12px"
        _hover="none"
        font-weight="300"
        type="submit"
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
  background: #E3E5E5;
  border-radius: 12px;
  height: 6px !important;
  padding: 0 !important;
}
.vue-slider-process{
  background: red;
}
.vue-slider-dot{
  border-radius: 12px;
  background: #4A4D4D;
}
.vue-slider-dot-tooltip{
  display: none;
}
</style>
