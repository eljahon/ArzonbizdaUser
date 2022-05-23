<script>
export default {
  name: 'ProductMobile',
}
</script>

<template>
  <CThemeProvider>
    <div class="containerBox">
      <CReset />
      <Header />
      <Nuxt />
    </div>
    <c-box as="div" d="block" w="100vw" h="150px"></c-box>

    <c-box
      class="mobileButtons"
      as="div"
      d="flex"
      align-items="center"
      justify-content="space-between"
      h="86px"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bg="white"
      shadow="0px -2px 8px rgba(0, 0, 0, 0.12)"
    >
      <c-box
        as="div"
        class="containerBox"
        d="flex"
        align-items="center"
        justify-content="space-between"
      >
        <c-button
          height="64px"
          max-w="337px"
          w="100%"
          mr="30px"
          border="1px"
          border-color="color.BorderColor"
          rounded="12px"
          bg="color.BorderColor"
          :_hover="false"
          :_active="false"
          :_focus="false"
          font-weight="400"
          color="white"
        >
          {{ $t('view') }}
        </c-button>
        <c-button
          height="64px"
          :disabled="isBadgeLength === 2"
          max-w="337px"
          w="100%"
          border="1px"
          border-color="color.BorderColor"
          rounded="12px"
          bg="white"
          :_hover="false"
          :_active="false"
          :_focus="false"
          font-weight="400"
          color="color.BorderColor"
          @click="IsComponents"
        >
          <c-icon name="compare" size="24px" mr="10px" />
          {{ $t('compare') }}
        </c-button>
      </c-box>
    </c-box>
    <FooterGlobal class="mobileFooter" />
  </CThemeProvider>
</template>

<style lang="scss" scoped>
.mobileFooter {
  @media screen and(max-width: 1200px) {
    display: none;
  }
}

.mobileButtons {
  @media screen and (min-width: 1200px) {
    display: none;
  }
}
</style>
