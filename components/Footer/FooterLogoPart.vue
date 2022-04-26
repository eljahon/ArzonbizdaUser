<script>
import { CBox, CStack, CFlex, CLink, CText } from '@chakra-ui/vue'
import Icon from '~/components/icon.vue'
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
  <CStack :spacing="['8px', '14px', '20px', '26px', '32px', '40px']">
    <CBox>
      <CFlex align="center">
        <CBox :mr="['4px', '5px', '6px', '7px', '8px', '8px']">
          <Icon name="logo_ab" />
        </CBox>
        <CBox>
          <Icon name="arzonbizda" />
        </CBox>
      </CFlex>
    </CBox>
    <CStack :spacing="['4px', '4px', '5px', '5px', '6px', '6px']">
      <CText
        font-family="Yandex Sans Display"
        font-weight="300"
        :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
        :line-height="['16px', '17px', '18px', '20px', '22px', '24px']"
        color="color.TextColor5"
      >
        {{ $t('phoneNumber') }}
      </CText>
      <CLink
        href="tell:998908545010"
        font-family="Yandex Sans Display"
        font-weight="400"
        :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
        :line-height="['16px', '17px', '18px', '20px', '22px', '24px']"
        color="white"
      >
        (99) 123 45 67
      </CLink>
    </CStack>
    <CFlex>
      <CLink :mr="['12px', '13px', '14px', '14px', '15px', '16px']"
        ><Icon name="facebook"
      /></CLink>
      <CLink :mr="['12px', '13px', '14px', '14px', '15px', '16px']"
        ><Icon name="instagram"
      /></CLink>
      <CLink :mr="['12px', '13px', '14px', '14px', '15px', '16px']"
        ><Icon name="telegram"
      /></CLink>
      <CLink><Icon name="tiktok" /></CLink>
    </CFlex>
  </CStack>
</template>
