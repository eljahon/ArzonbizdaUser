<script>
import { CThemeProvider, CBox, CHeading } from '@chakra-ui/vue'

export default {
  name: 'DescriptionComponent',

  components: {
    CThemeProvider,
    CBox,
    CHeading,
  },
}
</script>

<template>
  <CThemeProvider>
    <c-box
      :mt="['25px', '32px', '40px', '45px', '50px', '88px']"
      :justify-content="[
        'center',
        'center',
        'center',
        'space-between',
        'space-between',
        'space-between',
      ]"
      :flex-direction="['column', 'column', 'column', 'row', 'row', 'row']"
      :align-items="['center', 'center', 'center', 'start', 'start', 'start']"
      :display="['none', 'none', 'none', 'flex', 'flex', 'flex']"
    >
      <c-box width="50%" :mr="['0px', '0px', '0px', '20px', '23px', '30px']">
        <c-heading
          :width="['initial', 'initial', 'initial', '230px', '230px', '230px']"
          font-family="Yandex Sans Display"
          font-size="24px"
          font-weight="700"
          font-style="normal"
          line-height="24px"
          >{{ $t('shoptext') }}</c-heading
        >
        <c-heading
          font-family="Yandex Sans Display"
          font-size="16px"
          color="color.TextColor2"
          font-weight="400"
          font-style="normal"
          line-height="24px"
          mt="8px"
          >{{ $t('shoptexttitle') }}</c-heading
        >
        <c-text
          font-family="Yandex Sans Display"
          font-size="16px"
          font-weight="300"
          font-style="normal"
          line-height="24px"
          color="color.TextColor1"
          :mt="['3px', '3px', '3px', '16px', '16px', '16px']"
          >{{ $t('blogText') }}</c-text
        >
      </c-box>
      <c-box width="50%" :mt="['15px', '20px', '25px', '40px', '60px']">
        <c-heading
          font-family="Yandex Sans Display"
          font-size="16px"
          color="color.TextColor2"
          font-weight="400"
          font-style="normal"
          line-height="24px"
          >{{ $t('shoptexttitle2') }}</c-heading
        >
        <c-text
          font-family="Yandex Sans Display"
          font-size="16px"
          font-weight="300"
          font-style="normal"
          line-height="24px"
          color="color.TextColor1"
          :mt="['3px', '3px', '3px', '15px', '15px', '15px']"
          >{{ $t('blogText2') }}</c-text
        >
      </c-box>
      <c-box>
        <c-text></c-text>
      </c-box>
    </c-box>
  </CThemeProvider>
</template>

<style></style>
