<script>
import { CBox, CStack, CFlex, CLink, CText } from '@chakra-ui/vue'
import Icon from '~/assets/icon/icon.vue'
export default {
  name: 'FooterLogoPart',
  components: {
    CBox,
    CFlex,
    CStack,
    Icon,
    CLink,
    CText,
  },
}
</script>
<template>
  <CStack :spacing="['8px', '19px', '30px', '40px']">
    <CBox>
      <CFlex align="center">
        <CBox :mr="['4px', '4px', '6px', '8px']">
          <Icon name="logo_ab" />
        </CBox>
        <CBox>
          <Icon name="arzonbizda" />
        </CBox>
      </CFlex>
    </CBox>
    <CStack :spacing="['4px', '4px', '6px', '6px']">
      <CText
        font-family="Yandex Sans Display"
        font-weight="300"
        :font-size="['10px', '12px', '14px', '16px']"
        :line-height="['16px', '18px', '22px', '24px']"
        color="color.TextColor5"
      >
        {{ $t('phoneNumber') }}
      </CText>
      <CLink
        href="tell:998908545010"
        font-family="Yandex Sans Display"
        font-weight="400"
        :font-size="['10px', '14px', '16px', '20px']"
        :line-height="['16px', '18px', '22px', '24px']"
        color="white"
      >
        (99) 123 45 67
      </CLink>
    </CStack>
    <CFlex>
      <CLink :mr="['12px', '13px', '14px', '16px']"
        ><Icon name="facebook"
      /></CLink>
      <CLink :mr="['12px', '13px', '14px', '16px']"
        ><Icon name="instagram"
      /></CLink>
      <CLink :mr="['12px', '13px', '14px', '16px']"
        ><Icon name="telegram"
      /></CLink>
      <CLink><Icon name="tiktok" /></CLink>
    </CFlex>
  </CStack>
</template>
