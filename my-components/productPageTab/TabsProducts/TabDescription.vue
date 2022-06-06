<script>
import { CBox, CText } from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CText,
  },
}
</script>

<template>
  <CBox
    :padding="[
      '24px 0px',
      '25ppx 0px',
      '45px 0px',
      '45px 24px',
      '24px',
      '24px',
    ]"
    class="description___box"
    :bg="[
      'initial',
      'initial',
      'initial',
      'initial',
      'color.BgColor',
      'color.BgColor',
    ]"
  >
    <CText
      :width="['initial', 'initial', 'initial', 'initial', '786px', '786px']"
      font-family="Yandex Sans Display"
      color="color.TextColor1"
      :font-size="['12px', '12px', '13px', '14px', '16px', '16px']"
      :line-height="['20px', '21px', '22px', '23px', '24px', '24px']"
    >
      {{ $t('lorem') }}
    </CText></CBox
  >
</template>

<style lang="scss" scoped></style>
