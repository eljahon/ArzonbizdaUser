<script>
import { CBox, CText, CStack, CLink } from '@chakra-ui/vue'
export default {
  name: 'FooterInfoPart',
  components: {
    CBox,
    CText,
    CStack,
    CLink,
  },
}
</script>
<template>
  <CBox class="info__part">
    <CText
      font-weight="400"
      :font-size="['12px', '13px', '14px', '16px', '18px', '20px']"
      line-height="24px"
      color="white"
      :mb="['10px', '12px', '14px', '16px', '20px', '24px']"
      >{{ $t('info') }}</CText
    >
    <CStack :spacing="['5px', '6px', '7px', '8px', '9px', '10px']">
      <CLink
        font-family="Yandex Sans Display"
        font-weight="300"
        :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
        line-height="24px"
        color="white"
        _hover="{{}}"
        >{{ $t('publicOffer') }}</CLink
      >
      <CLink
        font-family="Yandex Sans Display"
        font-weight="300"
        :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
        line-height="24px"
        color="white"
        _hover="{{}}"
        >{{ $t('return') }}</CLink
      >
      <CLink
        font-family="Yandex Sans Display"
        font-weight="300"
        :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
        line-height="24px"
        color="white"
        _hover="{{}}"
        >{{ $t('installment') }}</CLink
      >
      <CLink
        font-family="Yandex Sans Display"
        font-weight="300"
        :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
        line-height="24px"
        color="white"
        _hover="{{}}"
        >{{ $t('onlinePayment') }}</CLink
      >
    </CStack>
  </CBox>
</template>

<style lang="scss" scoped>
.info__part {
  @media screen and(max-width: 995px) {
    display: none;
  }
}
</style>
