<script>
import { CBox, CText, CStack, CLink, CImage } from '@chakra-ui/vue'
export default {
  name: 'FooterAppPart',
  components: {
    CBox,
    CText,
    CStack,
    CLink,
    CImage,
  },
}
</script>
<template>
  <CBox>
    <CText
      :font-size="['12px', '13px', '14px', '16px', '18px', '20px']"
      line-height="24px"
      color="white"
      :mb="['8px', '12px', '14px', '18px', '20px', '24px']"
      >{{ $t('app') }}</CText
    >
    <CStack :spacing="['8px', '12px', '14px', '16px']">
      <CLink
        ><CImage
          :src="require('@/assets/img/appstore.png')"
          :max-w="['90px', '108px', '126px', '144px', '162px', '180px']"
      /></CLink>
      <CLink
        ><CImage
          :src="require('@/assets/img/googleplay.png')"
          :max-w="['90px', '108px', '126px', '144px', '162px', '180px']"
      /></CLink>
    </CStack>
  </CBox>
</template>
