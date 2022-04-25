<script>
export default {
  name: 'ContainerBox',
}
</script>

<template>
  <CThemeProvider>
    <div class="containerBox">
      <CReset />
      <Header />
      <Nuxt />
    </div>
    <FooterGlobal />
  </CThemeProvider>
</template>

<style lang="scss" scoped></style>
