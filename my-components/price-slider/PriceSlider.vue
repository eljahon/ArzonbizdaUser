<script>
import {
  CIcon,
  CInput,
  CFlex,
  CSlider,
  CSliderTrack,
  CSliderFilledTrack,
  CSliderThumb,
} from '@chakra-ui/vue'

export default {
  components: {
    CSlider,
    CSliderTrack,
    CSliderFilledTrack,
    CSliderThumb,
    CIcon,
    CInput,
    CFlex,
  },
}
</script>

<template>
  <div class="slider__price">
    <c-slider default-value="50" w="338px">
      <c-slider-track color="color.WarningColor1" bg="color.BorderColor2" />

      <c-slider-thumb
        color="color.WarningColor1"
        bg="color.TextColor2"
        _focus="none"
      />
      <c-slider-filled-track
        color="color.WarningColor1"
        bg="color.TextColor2"
      />
    </c-slider>

    <CFlex align="center" gap="9px" mt="29px">
      <c-input
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
      >
        Поиск
      </c-button>
    </CFlex>
  </div>
</template>

<style lang="scss" scoped></style>
