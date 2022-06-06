<script>
import { CTabs, CTabList, CTabPanels, CTab, CTabPanel } from '@chakra-ui/vue'
import PricesTabContent from './PricesTabContent.vue'
// import CompareTabComment from './CompareTabComment.vue'
import CompareTabCharacteristics from './CompareTabCharacteristics.vue'
// import CompareReviews from './CompareReviews.vue'

export default {
  name: 'CompareTabs',

  components: {
    CTabs,
    CTabList,
    CTabPanels,
    CTab,
    CTabPanel,
    PricesTabContent,
    // CompareTabComment,
    CompareTabCharacteristics,
    // CompareReviews,
  },

  props: {
    item: {
      type: Object || Array,
      default: null,
      required: true,
    },
  },
}
</script>

<template>
  <c-tabs
    mt="58px"
    :display="['none', 'none', 'block', 'block', 'block', 'block']"
  >
    <c-tab-list
      class="c-tabList"
      border-bottom="none"
      bg="color.ImageBgColor"
      :padding="['4px', '4px', '4px', '8px', '12px', '12px']"
      :border-radius="['4px', '4px', '4px', '8px', '12px', '12px']"
      :justify-content="[
        'space-between',
        'space-between',
        'space-between',
        'space-between',
        'start',
        'start',
      ]"
    >
      <c-tab
        class="c-tab1"
        :_active="{ bg: 'transparent' }"
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
        :px="['6px', '6px', '8px', '8px', '20px', '20px']"
        :border-right-color="[
          'none',
          'none',
          'none',
          'color.TabBorderRightColor',
          'color.TabBorderRightColor',
          'color.TabBorderRightColor',
        ]"
        :border-right-width="['0px', '0px', '0px', '0px', '1px', '1px']"
        text-align="center"
        :font-size="['10px', '11px', '12px', '12px', '14px', '16px']"
        font-family="Yandex Sans Display"
        font-weight="400"
        :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
        >{{ $t('tab1') }}</c-tab
      >
      <c-tab
        class="c-tab2"
        :_active="{ bg: 'transparent' }"
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
        :px="['6px', '6px', '8px', '8px', '20px', '20px']"
        :border-right-color="[
          'none',
          'none',
          'none',
          'color.TabBorderRightColor',
          'color.TabBorderRightColor',
          'color.TabBorderRightColor',
        ]"
        :border-right-width="['0px', '0px', '0px', '0px', '1px', '1px']"
        text-align="center"
        :font-size="['10px', '11px', '12px', '12px', '14px', '16px']"
        font-family="Yandex Sans Display"
        font-weight="400"
        :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
        >{{ $t('tab2') }}</c-tab
      >
      <!-- <c-tab
        class="c-tab3"
        :_active="{ bg: 'transparent' }"
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
        :px="['6px', '6px', '8px', '8px', '20px', '20px']"
        :border-right-color="[
          'none',
          'none',
          'none',
          'color.TabBorderRightColor',
          'color.TabBorderRightColor',
          'color.TabBorderRightColor',
        ]"
        :border-right-width="['0px', '0px', '0px', '0px', '1px', '1px']"
        text-align="center"
        :font-size="['10px', '11px', '12px', '12px', '14px', '16px']"
        font-family="Yandex Sans Display"
        font-weight="400"
        :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
        >{{ $t('tab3') }}</c-tab
      > -->
      <c-tab
        class="c-tab4"
        :_active="{ bg: 'transparent' }"
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
        :px="['6px', '6px', '8px', '8px', '20px', '20px']"
        text-align="center"
        :font-size="['10px', '11px', '14px', '12px', '14px', '16px']"
        font-family="Yandex Sans Display"
        font-weight="400"
        :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
        >{{ $t('tab4') }}</c-tab
      >
    </c-tab-list>

    <c-tab-panels>
      <c-tab-panel>
        <prices-tab-content :item="item" />
      </c-tab-panel>
      <!-- <c-tab-panel>
        <compare-tab-comment :item="item" />
      </c-tab-panel> -->
      <c-tab-panel>
        <compare-reviews :item="item" />
      </c-tab-panel>
      <c-tab-panel>
        <compare-tab-characteristics :item="item.characteristics" />
      </c-tab-panel>
    </c-tab-panels>
  </c-tabs>
</template>

<style lang="scss" scoped>
@media (max-width: 1312px) {
  .c-tab1 {
    padding: initial 20px;
  }
  .c-tab2 {
    padding: initial 20px;
  }
  .c-tab3 {
    padding: initial 20px;
  }
  .c-tab4 {
    padding: initial 20px;
  }
}
</style>
