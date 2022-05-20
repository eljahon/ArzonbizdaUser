<script>
import {
  CThemeProvider,
  CBox,
  CTabs,
  CTabList,
  CTabPanels,
  CTab,
  CTabPanel,
} from '@chakra-ui/vue'

import TabDescription from './TabDescription.vue'
import TabsProducts from './TabsProducts.vue'
import TabCharacteristics from './TabCharacteristics.vue'
// import TabReviews from './TabReviews.vue'

import aos from '@/helpers/aos'

import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'

export default {
  name: 'ChakraTab',

  components: {
    CThemeProvider,
    CBox,
    CTabs,
    CTabList,
    CTabPanels,
    CTab,
    CTabPanel,
    TabDescription,
    TabsProducts,
    TabCharacteristics,
    // TabReviews,
  },

  mixins: [
    {
      methods: {
        aos,
      },
    },
  ],

  props: {
    selectedProduct: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    AOS.init({})
  },
}
</script>

<template>
  <CThemeProvider
    ><CBox>
      <CTabs>
        <CTabList
          :justify-content="[
            'space-between',
            'space-between',
            'space-between',
            'start',
            'start',
            'start',
          ]"
          border-bottom="none"
          mt="84px"
        >
          <CTab
            :_selected="{
              fontWeight: '700',
              color: 'color.WarningColor1',

              borderBottomColor: 'color.WarningColor1',
              borderBottomWidth: '3px',
              borderBottomRightRadius: '2px',
              borderBottomLeftRadius: '2px',
            }"
            :_focus="{ outline: 'none' }"
            color="color.TextColor1"
            :width="['100%', '100%', '100%', 'initial', 'initial', 'initial']"
            :px="['10px', '10px', '20px', '63px', '63px', '63px']"
            :border-right-color="[
              'none',
              'none',
              'none',
              'color.TabBorderRightColor',
              'color.TabBorderRightColor',
              'color.TabBorderRightColor',
            ]"
            :border-right-width="['0px', '0px', '0px', '1px', '1px', '1px']"
            text-align="center"
            :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
            font-family="Yandex Sans Display"
            font-weight="400"
            :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
            >{{ $t('tab1') }}</CTab
          >
          <CTab
            :_selected="{
              fontWeight: '700',
              color: 'color.WarningColor1',

              borderBottomColor: 'color.WarningColor1',
              borderBottomWidth: '3px',
              borderBottomRightRadius: '2px',
              borderBottomLeftRadius: '2px',
            }"
            :_focus="{ outline: 'none' }"
            color="color.TextColor1"
            :width="['100%', '100%', '100%', 'initial', 'initial', 'initial']"
            :px="['10px', '10px', '15px', '18px', '20px', '48px']"
            :border-right-color="[
              'none',
              'none',
              'none',
              'color.TabBorderRightColor',
              'color.TabBorderRightColor',
              'color.TabBorderRightColor',
            ]"
            :border-right-width="['0px', '0px', '0px', '1px', '1px', '1px']"
            text-align="center"
            :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
            font-family="Yandex Sans Display"
            font-weight="400"
            :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
            >{{ $t('tab2') }}</CTab
          >
          <!-- <CTab
            :_selected="{
              fontWeight: '700',
              color: 'color.WarningColor1',
              borderBottomColor: 'color.WarningColor1',
              borderBottomWidth: '3px',
              borderBottomRightRadius: '2px',
              borderBottomLeftRadius: '2px',
            }"
            :_focus="{ outline: 'none', bg: '#fff' }"
            color="color.TextColor1"
            :width="['100%', '100%', '100%', 'initial', 'initial', 'initial']"
            :px="['10px', '10px', '20px', '22px', '24px', '25px']"
            :border-right-color="[
              'none',
              'none',
              'none',
              'color.TabBorderRightColor',
              'color.TabBorderRightColor',
              'color.TabBorderRightColor',
            ]"
            :border-right-width="['0px', '0px', '0px', '1px', '1px', '1px']"
            text-align="center"
            :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
            font-family="Yandex Sans Display"
            font-weight="400"
            :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
            >{{ $t('tab3') }}</CTab
          > -->
          <CTab
            :_selected="{
              fontWeight: '700',
              color: 'color.WarningColor1',
              borderBottomColor: 'color.WarningColor1',
              borderBottomWidth: '3px',
              borderBottomRightRadius: '2px',
              borderBottomLeftRadius: '2px',
            }"
            :_focus="{ outline: 'none', bg: '#fff' }"
            color="color.TextColor1"
            :width="['100%', '100%', '100%', 'initial', 'initial', 'initial']"
            :px="['10px', '10px', '20px', '22px', '24px', '25px']"
            text-align="center"
            :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
            font-family="Yandex Sans Display"
            font-weight="400"
            :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
            >{{ $t('tab4') }}</CTab
          >
        </CTabList>

        <CTabPanels>
          <CTabPanel>
            <tabs-products
              :products="selectedProduct.compares"
              data-aos="fade-up"
            />
         
          </CTabPanel>

          <CTabPanel>
            <tab-description data-aos="fade-up" />
          </CTabPanel>

          <!-- <CTabPanel>
            <TabReviews :reviews="selectedProduct.product"/>
          </CTabPanel> -->

          <CTabPanel>
            <tab-characteristics
              data-aos="fade-up"
              :characterics="selectedProduct.product.characteristics"
            />
          </CTabPanel>
        </CTabPanels> </CTabs
    ></CBox>
  </CThemeProvider>
</template>

<style></style>
