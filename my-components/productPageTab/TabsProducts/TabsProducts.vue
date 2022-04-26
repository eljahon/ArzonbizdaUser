<script>
import { CBox, CImage, CHeading, CText, CButton } from '@chakra-ui/vue'
import Icon from '@/components/icon.vue'
export default {
  components: {
    CBox,
    CImage,
    CHeading,
    Icon,
    CText,
    CButton,
  },
  props: {
    toogleWord: {
      required: true,
      type: String,
    },
  },
}
</script>
<template>
  <CBox bg="#FAFAFA">
    <CBox v-if="toogleWord === 'one'">
      <CBox
        display="['block','block','block','block','flex','flex']"
        justify-content="space-between"
        :padding="[
          '20px',
          '20px',
          '20px',
          '20px',
          '20px',
          '32px 150px 33px 32px',
        ]"
      >
        <CBox display="['block','block','block','block','flex','flex']">
          <CBox
            border-radius="16px"
            width="194px"
            padding="32px 23px"
            bg="color.pocoBg"
            display="flex"
            justify-content="center"
            align-items="center"
            height="196px"
            position="relative"
          >
            <CImage
              width="100%"
              height="100%"
              object-fit="cover"
              position="absolute"
              :src="require('@/assets/img/Poco-X3-128.png')"
            ></CImage>
          </CBox>
          <CBox ml="30px">
            <CHeading
              color="color.TextColor2"
              font-size="24px"
              font-family="Yandex Sans Display"
              font-weight="400"
              line-height="40px"
              >Смартфон Xiaomi</CHeading
            >
            <CHeading
              color="color.TextColor2"
              font-size="24px"
              font-family="Yandex Sans Display"
              font-weight="400"
              line-height="40px"
              >Poco X3 Pro 8/256GB</CHeading
            >
            <CBox
              bg="white"
              mt="16px"
              display="['inline-block','inline-block','inline-block','block','block','block']"
              border-radius="16px"
            >
              <CBox
                display="flex"
                justify-content="space-between"
                align-items="center"
                padding="16px"
                border="1px solid color.TextColor2"
              >
                <CHeading
                  color="color.TextColor2"
                  font-size="20px"
                  font-family="Yandex Sans Display"
                  font-weight="400"
                  line-height="24px"
                  >UPD Mobile</CHeading
                >
                <Icon name="green_tick" />
              </CBox>
            </CBox>
          </CBox>
        </CBox>
        <CBox mt="20px"
          ><CText
            color="color.TextColor4"
            font-size="20px"
            font-family="Yandex Sans Display"
            font-weight="400"
            line-height="24px"
            >Без кредита</CText
          >
          <CText
            color="color.TextColor2"
            font-size="28px"
            font-family="Yandex Sans Display"
            font-weight="700"
            line-height="40px"
            mt="8px"
            >3 324 000 сум</CText
          >
          <CBox display="flex" aligin-items="center" mt="8px">
            <CButton
              color="#FFF"
              font-size="16px"
              font-family="Yandex Sans Display"
              font-weight="400"
              line-height="24px"
              class="button"
              border="1px"
              border-style="solid"
              border-color="color.WarningColor1"
              bg="color.WarningColor1"
              border-radius="12px"
              px="48px"
              py="8px"
              :_hover="{ bg: 'white', color: 'color.WarningColor1' }"
              :_focus="{ outline: 'none' }"
              >В магазин</CButton
            >
            <CBox display="flex" align-items="center">
              <CButton
                color="color.WarningColor1"
                text-align="center"
                font-size="16px"
                font-family="Yandex Sans Display"
                font-weight="700"
                line-height="24px"
                border="none"
                bg="transparent"
                :_hover="{ bg: 'transparent' }"
                :_focus="{ outline: 'none' }"
                as="router-link"
                to="/"
                >Подробнее</CButton
              >
              <Icon name="right_arrow" />
            </CBox>
          </CBox>
        </CBox>
      </CBox>
    </CBox>
    <CBox v-if="toogleWord === 'two'">
      <CBox> TWO </CBox>
    </CBox>
    <CBox v-if="toogleWord === 'three'">
      <CBox> Three </CBox>
    </CBox>
    <CBox v-if="toogleWord === 'four'">
      <CBox> Four </CBox>
    </CBox>
  </CBox>
</template>

<style scoped>
.button:focus {
  background-color: white;
}
</style>
