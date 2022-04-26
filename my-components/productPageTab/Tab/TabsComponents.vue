<script>
import { CThemeProvider, CBox, CButton } from '@chakra-ui/vue'
import TabsProducts from '../TabsProducts/TabsProducts.vue'
export default {
  components: {
    CThemeProvider,
    CBox,
    CButton,
    TabsProducts,
  },
  data() {
    return {
      toogleWord: 'one',
    }
  },
  methods: {
    one() {
      this.toogleWord = 'one'
    },
    two() {
      this.toogleWord = 'two'
    },
    three() {
      this.toogleWord = 'three'
    },
    four() {
      this.toogleWord = 'four'
    },
  },
}
</script>
<template>
  <CThemeProvider>
    <CBox>
      <CBox border-radius="16px" p="12px 0px">
        <CButton
          :style="[
            toogleWord === 'one'
              ? {
                  color: 'red',
                  borderBottom: '2px solid red',
                  fontWeight: '700',
                }
              : { color: '#707373' },
          ]"
          class="button"
          border="none"
          bg="white"
          border-right="1px solid #E3E6E6"
          :_hover="{ bg: 'white' }"
          :_focus="{ outline: 'none' }"
          py="20px"
          px="63px"
          color="color.TextColor1"
          text-align="center"
          font-size="16px"
          font-family="Yandex Sans Display"
          font-weight="400"
          line-height="24px"
          @click="one"
          >Цены</CButton
        >
        <CButton
          :style="[
            toogleWord === 'two'
              ? {
                  color: 'red',
                  borderBottom: '2px solid red',
                  fontWeight: '700',
                }
              : { color: '#707373' },
          ]"
          class="button"
          border="none"
          bg="white"
          border-right="1px solid #E3E6E6"
          :_hover="{ bg: 'white' }"
          :_focus="{ outline: 'none' }"
          py="20px"
          px="48px"
          color="color.TextColor1"
          text-align="center"
          font-size="16px"
          font-family="Yandex Sans Display"
          font-weight="400"
          line-height="24px"
          @click="two"
          >Описание</CButton
        >
        <CButton
          :style="[
            toogleWord === 'three'
              ? {
                  color: 'red',
                  borderBottom: '2px solid red',
                  fontWeight: '700',
                }
              : { color: '#707373' },
          ]"
          class="button"
          border="none"
          bg="white"
          border-right="1px solid #E3E6E6"
          :_hover="{ bg: 'white' }"
          :_focus="{ outline: 'none' }"
          py="20px"
          px="25px"
          color="color.TextColor1"
          text-align="center"
          font-size="16px"
          font-family="Yandex Sans Display"
          font-weight="400"
          line-height="24px"
          @click="three"
          >Отзывы</CButton
        >
        <CButton
          :style="[
            toogleWord === 'four'
              ? {
                  color: 'red',
                  borderBottom: '2px solid red',
                  fontWeight: '700',
                }
              : { color: '#707373' },
          ]"
          class="button"
          border="none"
          bg="white"
          :_hover="{ bg: 'white' }"
          :_focus="{ outline: 'none' }"
          py="20px"
          px="63px"
          color="color.TextColor1"
          text-align="center"
          font-size="16px"
          font-family="Yandex Sans Display"
          font-weight="400"
          line-height="24px"
          @click="four"
          >Характеристики</CButton
        >
      </CBox>
      <TabsProducts :toogle-word="toogleWord" />
    </CBox>
  </CThemeProvider>
</template>

<style scoped>
.button:focus {
  background-color: white;
}
.button {
  border-radius: 0px;
}
</style>
