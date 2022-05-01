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
      <CBox
        display="flex"
        align-items="center"
        mt="12px"
        :transform="[
          'translateY(0px)',
          'translateY(0px)',
          'translateY(0px)',
          'translateY(0px)',
          'translateY(8px)',
          'translateY(8px)',
        ]"
        border-radius="16px"
        p="12px"
      >
        <CBox>
          <CButton
            :style="[
              toogleWord === 'one'
                ? {
                    color: 'red',
                    fontWeight: '700',
                  }
                : { color: '#707373' },
            ]"
            class="button"
            border="none"
            bg="white"
            :border-right="[
              'none',
              'none',
              'none',
              'none',
              '1px solid #E3E6E6',
              '1px solid #E3E6E6',
            ]"
            :_hover="{ bg: 'white' }"
            :_focus="{ outline: 'none' }"
            :py="['8px', '10px', '12px', '15px', '18px', '20px']"
            :px="['10px', '10px', '20px', '63px', '63px', '63px']"
            color="color.TextColor1"
            text-align="center"
            :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
            font-family="Yandex Sans Display"
            font-weight="400"
            :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
            @click="one"
            >Цены</CButton
          >
          <CBox display="flex" align-items="center" justify-content="center">
            <CBox
              :style="[
                toogleWord === 'one'
                  ? {
                      display: 'block',
                    }
                  : { display: 'none' },
              ]"
              :w="['30px', '32px', '33px', '35px', '37px', '40px']"
              h="3px"
              bg="red"
              border-radius="8px 8px 0px 0px"
            ></CBox>
          </CBox>
        </CBox>
        <Cbox>
          <CButton
            :style="[
              toogleWord === 'two'
                ? {
                    color: 'red',
                    fontWeight: '700',
                  }
                : { color: '#707373' },
            ]"
            class="button"
            border="none"
            bg="white"
            :border-right="[
              'none',
              'none',
              'none',
              'none',
              '1px solid #E3E6E6',
              '1px solid #E3E6E6',
            ]"
            :_hover="{ bg: 'white' }"
            :_focus="{ outline: 'none' }"
            :py="['8px', '10px', '12px', '15px', '18px', '20px']"
            :px="['10px', '10px', '15px', '18px', '20px', '48px']"
            color="color.TextColor1"
            text-align="center"
            :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
            font-family="Yandex Sans Display"
            font-weight="400"
            :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
            @click="two"
            >Описание</CButton
          >
          <CBox display="flex" align-items="center" justify-content="center">
            <CBox
              :style="[
                toogleWord === 'two'
                  ? {
                      display: 'block',
                    }
                  : { display: 'none' },
              ]"
              :w="['30px', '35px', '40px', '45px', '70px', '80px']"
              h="3px"
              bg="red"
              border-radius="8px 8px 0px 0px"
            ></CBox>
          </CBox>
        </Cbox>
        <CBox>
          <CButton
            :style="[
              toogleWord === 'three'
                ? {
                    color: 'red',
                    fontWeight: '700',
                  }
                : { color: '#707373' },
            ]"
            class="button"
            border="none"
            bg="white"
            :border-right="[
              'none',
              'none',
              'none',
              'none',
              '1px solid #E3E6E6',
              '1px solid #E3E6E6',
            ]"
            :_hover="{ bg: 'white' }"
            :_focus="{ outline: 'none' }"
            :py="['8px', '10px', '12px', '15px', '18px', '20px']"
            :px="['10px', '10px', '20px', '22px', '24px', '25px']"
            color="color.TextColor1"
            text-align="center"
            :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
            font-family="Yandex Sans Display"
            font-weight="400"
            :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
            @click="three"
            >Отзывы</CButton
          >
          <CBox display="flex" align-items="center" justify-content="center">
            <CBox
              :style="[
                toogleWord === 'three'
                  ? {
                      display: 'block',
                    }
                  : { display: 'none' },
              ]"
              :w="['30px', '35px', '40px', '50px', '60px', '70px']"
              h="3px"
              bg="red"
              border-radius="8px 8px 0px 0px"
            ></CBox>
          </CBox>
        </CBox>
        <CBox>
          <CButton
            :style="[
              toogleWord === 'four'
                ? {
                    color: 'red',
                    fontWeight: '700',
                  }
                : { color: '#707373' },
            ]"
            class="button"
            border="none"
            bg="white"
            :_hover="{ bg: 'white' }"
            :_focus="{ outline: 'none' }"
            :py="['8px', '10px', '12px', '15px', '18px', '20px']"
            :px="['10px', '10px', '20px', '22px', '24px', '25px']"
            color="color.TextColor1"
            text-align="center"
            :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
            font-family="Yandex Sans Display"
            font-weight="400"
            :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
            @click="four"
            >Характеристики</CButton
          >
          <CBox display="flex" align-items="center" justify-content="center">
            <CBox
              :style="[
                toogleWord === 'four'
                  ? {
                      display: 'block',
                    }
                  : { display: 'none' },
              ]"
              :w="['60px', '75px', '85px', '95px', '110px', '120px']"
              h="3px"
              bg="red"
              border-radius="8px 8px 0px 0px"
            ></CBox>
          </CBox>
        </CBox>
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
