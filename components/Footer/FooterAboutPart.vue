<script>
import { CBox, CText, CStack, CLink } from '@chakra-ui/vue'
export default {
  name: 'FooterAboutPart',
  components: {
    CBox,
    CText,
    CStack,
    CLink,
  },
}
</script>
<template>
  <CBox>
    <CText
      font-weight="400"
      :font-size="['12px', '13px', '14px', '16px', '18px', '20px']"
      line-height="24px"
      color="white"
      :mb="['10px', '12px', '14px', '16px', '20px', '24px']"
      >{{ $t('about') }}</CText
    >
    <CStack :spacing="['5px', '6px', '7px', '8px', '9px', '10px']">
      <CLink
        font-family="Yandex Sans Display"
        font-weight="300"
        :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
        line-height="24px"
        color="white"
        _hover="{{}}"
        >{{ $t('company') }}</CLink
      >
      <CLink
        font-family="Yandex Sans Display"
        font-weight="300"
        :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
        line-height="24px"
        color="white"
        _hover="{{}}"
        >{{ $t('vacancy') }}</CLink
      >
      <CLink
        font-family="Yandex Sans Display"
        font-weight="300"
        :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
        line-height="24px"
        color="white"
        _hover="{{}}"
        >{{ $t('address') }}</CLink
      >
      <CLink
        font-family="Yandex Sans Display"
        font-weight="300"
        :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
        line-height="24px"
        color="white"
        _hover="{{}}"
        >{{ $t('reviews') }}</CLink
      >
    </CStack>
  </CBox>
</template>
