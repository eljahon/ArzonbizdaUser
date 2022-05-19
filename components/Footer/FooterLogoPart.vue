<script>
import { CBox, CStack, CFlex, CLink, CText, CIcon } from '@chakra-ui/vue'
export default {
  name: 'FooterLogoPart',
  components: {
    CBox,
    CFlex,
    CStack,
    CLink,
    CText,
    CIcon,
  },
}
</script>
<template>
  <CStack :spacing="['8px', '14px', '20px', '26px', '32px', '40px']">
    <CBox>
      <CFlex align="center">
        <CBox :mr="['4px', '5px', '6px', '7px', '8px', '8px']">
          <CIcon
            name="logo_ab"
            :width="['19px', '22px', '25px', '28px', '32px', '37px']"
            :height="['19px', '22px', '25px', '28px', '32px', '36px']"
          />
        </CBox>
        <CBox>
          <CIcon
            name="arzonBizda"
            :width="['73px', '86px', '99px', '112px', '125px', '139px']"
            :height="['13px', '15px', '17px', '19px', '21px', '24px']"
          />
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
      <CLink
        href="https://www.facebook.com/"
        is-external
        :mr="['12px', '13px', '14px', '14px', '15px', '16px']"
        ><CIcon
          name="facebook"
          color="white"
          :size="['16px', '18px', '20px', '22px', '23px', '24px']"
      /></CLink>

      <CLink
        href="https://www.instagram.com/"
        is-external
        :mr="['12px', '13px', '14px', '14px', '15px', '16px']"
      >
        <CIcon
          name="instagram"
          color="white"
          :size="['16px', '18px', '20px', '22px', '23px', '24px']"
      /></CLink>

      <CLink
        href="https://www.telegram.me/abdulvohid_karimov"
        is-external
        :mr="['12px', '13px', '14px', '14px', '15px', '16px']"
        ><CIcon
          name="telegram"
          color="white"
          :size="['16px', '18px', '20px', '22px', '23px', '24px']"
      /></CLink>

      <CLink href="https://www.tiktok.com/" is-external
        ><CIcon
          name="tiktok"
          color="white"
          fill="transparent"
          :size="['16px', '18px', '20px', '22px', '23px', '24px']"
      /></CLink>
    </CFlex>
  </CStack>
</template>
