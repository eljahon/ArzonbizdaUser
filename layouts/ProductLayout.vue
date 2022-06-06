<script>
import OpenProductBtn from '~/my-components/product-buttons/OpenProductBtn.vue'
import CompareProductBtn from '~/my-components/product-buttons/CompareProductBtn.vue'

export default {
  name: 'ProductMobile',
  components: {
    OpenProductBtn,
    CompareProductBtn,
  },
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
        <OpenProductBtn />
        <CompareProductBtn />
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
