<script>
import { CTabs, CTabList, CTabPanels, CTab, CTabPanel } from '@chakra-ui/vue'
import PricesTabContent from './PricesTabContent.vue'
import CompareTabComment from './CompareTabComment.vue'
import CompareTabCharacteristics from './CompareTabCharacteristics.vue'
import CompareReviews from './CompareReviews.vue'
export default {
  components: {
    CTabs,
    CTabList,
    CTabPanels,
    CTab,
    CTabPanel,
    PricesTabContent,
    CompareTabComment,
    CompareTabCharacteristics,
    CompareReviews,
  },
}
</script>
<template>
  <c-tabs>
    <c-tab-list
      class="c-tabList"
      border-bottom="none"
      bg="color.ImageBgColor"
      padding="12px"
      border-radius="12px"
    >
      <c-tab
        class="c-tab"
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
        :px="['10px', '10px', '20px', '20px', '30px', '30px']"
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
        :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
        font-family="Yandex Sans Display"
        font-weight="400"
        :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
        >{{ $t('tab1') }}</c-tab
      >
      <c-tab
        class="c-tab"
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
        :px="['10px', '10px', '20px', '23px', '30px', '30px']"
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
        :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
        font-family="Yandex Sans Display"
        font-weight="400"
        :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
        >{{ $t('tab2') }}</c-tab
      >
      <c-tab
        class="c-tab"
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
        :px="['10px', '10px', '20px', '20px', '30px', '30px']"
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
        :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
        font-family="Yandex Sans Display"
        font-weight="400"
        :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
        >{{ $t('tab3') }}</c-tab
      >
      <c-tab
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
        :px="['10px', '10px', '20px', '30px', '40px', '40px']"
        text-align="center"
        :font-size="['10px', '11px', '14px', '16px', '16px', '16px']"
        font-family="Yandex Sans Display"
        font-weight="400"
        :line-height="['10px', '11px', '14px', '16px', '16px', '24px']"
        >{{ $t('tab4') }}</c-tab
      >
    </c-tab-list>

    <c-tab-panels>
      <c-tab-panel>
        <prices-tab-content />
      </c-tab-panel>
      <c-tab-panel>
        <compare-tab-comment />
      </c-tab-panel>
      <c-tab-panel>
        <compare-reviews />
      </c-tab-panel>
      <c-tab-panel>
        <compare-tab-characteristics />
      </c-tab-panel>
    </c-tab-panels>
  </c-tabs>
</template>

<style lang="scss" scoped>
@media (max-width: 1309px) {
  .c-tabList {
    justify-content: space-between;
  }
}
</style>
